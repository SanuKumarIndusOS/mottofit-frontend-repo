// import config from "../../config";

import { MessagingActionType } from "../service/actionType";
import { twilioApi } from "../service/apiVariables";
import { api } from "../service/api";
import { Toast } from "../service/toast";
import {
  updatePersonTyping,
  resetChannelDetails,
  updateGlobalMessagingDetails,
} from "../action/messagingAct";

const Chat = require("twilio-chat");

export default class TwilioMessaging {
  constructor(handler, getState, callback) {
    this.getState = getState;

    this.handler = handler;

    this.activeChannel = null;

    this.client = null;

    this.callbackApi = callback;

    this.initClient();
  }

  initClient = async () => {
    const token = await this.getToken();

    const client = await Chat.Client.create(token);

    this.client = client;

    this.handler({
      type: MessagingActionType.INITIALIZE_CLIENT,
      payload: client,
    });

    this.initClientListeners(client);
  };

  initClientListeners = (client) => {
    // REMOVE ALL THE EXISTING LISTENERS
    client.removeAllListeners();

    // client.on("channelJoined", async (channel) => {
    //   // getting list of all messages since this is an existing channel
    //   console.log(channel);

    //   await this.onChanelJoined(channel);
    // });

    // LISTEN FOR GLOBAL MESSAGES

    client.on("messageAdded", async (message) => {
      this.globalMessage(message);
    });

    // LISTEN FOR PERSON WHOSE ARE TYPING
    client.on("typingStarted", (participant) => {
      this.onParticipantStartTyping(participant);
    });

    // LISTEN FOR PERSON WHOM HAVE STOP TYPING
    client.on("typingEnded", (participant) => {
      this.onParticipantEndedTyping(participant);
    });

    //LISTEN AND UPDATE IF TOKEN IS ABOUT TO EXPIRE

    client.on("tokenAboutToExpire", async () => {
      this.log("token is about to expire");
      const token = await this.getToken();
      client.updateToken(token);
    });

    // LISTEN IF ALREADY TOKEN HAS EXPIRED

    client.on("tokenExpired", async () => {
      this.log("token is about to expire");
      const token = await this.getToken();
      client.updateToken(token);
    });
  };

  globalMessage = (message) => {
    updateGlobalMessagingDetails(message)(this.handler, this.getState);
  };

  joinChannelByID = async (uniqueChannelId) => {
    return new Promise(async (resolve, reject) => {
      try {
        this.unSubscribeChannel();
        if (!this.client) return 0;

        this.handler({
          type: MessagingActionType.UPDATE_MESSAGING_DETAILS,
          payload: { isLoading: true },
        });

        this.log(`Attempting to join ${uniqueChannelId} channel`);

        const channel = await this.client.getChannelByUniqueName(
          uniqueChannelId
        );
        await this.joinChannel(channel);

        await this.onChanelJoined(channel);

        this.log(`Channel joined`);

        this.activeChannel = channel;

        // LISTEN ON CHANNEL MESSAGE ADDED

        channel.on("messageAdded", async (message) => {
          await this.onMessagedAdded(message);
        });

        // LISTEN FOR PERSON WHOSE ARE TYPING
        channel.on("typingStarted", (participant) => {
          this.onParticipantStartTyping(participant);
        });

        // LISTEN FOR PERSON WHOM HAVE STOP TYPING
        channel.on("typingEnded", (participant) => {
          this.onParticipantEndedTyping(participant);
        });

        // WHEN A MEMBER JOINED

        channel.on("memberJoined", (member) => {
          this.onMemberJoined(member);
        });

        // WHEN A MEMBER LEFT
        channel.on("memberLeft", (member) => {
          this.onMemberLeft(member);
        });

        this.handler({
          type: MessagingActionType.UPDATE_CHANNEL_DETAILS,
          payload: channel,
        });
        resolve(true);
      } catch (err) {
        this.log(`Not able to join the channel`);
        reject(err);
      }
    });
  };

  joinChannel = async (channel) => {
    if (channel.channelState.status !== "joined") {
      await channel.join();
    }
  };

  // FUNC FIRES WHEN USER JOINED IN A CHANNEL

  onChanelJoined = async (channel) => {
    const messages = await channel.getMessages();

    let tempMessage = messages.items || [];

    this.handler({
      type: MessagingActionType.UPDATE_MESSAGING_DETAILS,
      payload: {
        activeChannelMessages: [...tempMessage],
        isLoading: false,
      },
    });
  };

  // FUNC FIRES WHEN USER RECIVES MESSAGE

  onMessagedAdded = (message) => {
    const { channel } = message;
    if (channel.sid !== this.activeChannel.sid) {
      console.log(message, "msg", "diff channel");
      return {};
    } else {
      return this.handler({
        type: MessagingActionType.UPDATE_MESSAGE_DETAILS,
        payload: message,
      });
    }
  };

  // WHEN PERSON STARTS TYPING THIS FUNC FIRES

  onParticipantStartTyping = (participant) => {
    let payload = {
      type: "typingStarted",
      participant,
    };
    updatePersonTyping(payload)(this.handler, this.getState);
  };

  // WHEN PERSON STOPS TYPING THIS FUNC FIRES

  onParticipantEndedTyping = (participant) => {
    let payload = {
      type: "typingEnded",
      participant,
    };
    updatePersonTyping(payload)(this.handler, this.getState);
  };

  // WHEN NEW PERSON JOINS THE ROOM THIS FUNC FIRES

  onMemberJoined = (member) => {
    const { state } = member;

    const { identity } = state;

    this.log(`${identity} has joined the chat`);

    return this.handler({
      type: MessagingActionType.UPDATE_MESSAGING_DETAILS,
      payload: {
        status: `${identity} has joined the chat`,
      },
    });
  };

  // WHEN A PERSON LEFT THE ROOM THIS FUNC FIRES

  onMemberLeft = (member) => {
    const { state } = member;

    const { identity } = state;

    this.log(`${identity} has left the chat`);

    return this.handler({
      type: MessagingActionType.UPDATE_MESSAGING_DETAILS,
      payload: {
        status: `${identity} has left the chat`,
      },
    });
  };

  getToken = () => {
    const { getIdentityToken } = twilioApi;

    getIdentityToken.id = localStorage.getItem("user-id");

    return new Promise((resolve, reject) => {
      api({ ...getIdentityToken })
        .then(({ chatToken }) => {
          //   console.log(chatToken);
          resolve(chatToken);
        })
        .catch((err) => {
          Toast({ type: "error", message: err.message || "Error" });
          reject(err);
        });
    });
  };

  // REMOVE THE LISTENERS FROM THE ACTIVE CHANNEL

  unSubscribeChannel = () => {
    if (this.activeChannel) {
      this.activeChannel.removeAllListeners();
      this.activeChannel = null;
      this.log("Un subscribed from the channel");
    }
    resetChannelDetails()(this.handler);
  };

  // REMOVE CHAT CLIENT

  removeChatClient = () => {
    if (this.client) {
      this.client.removeAllListeners();
      this.client = null;
      this.handler({
        type: MessagingActionType.UPDATE_MESSAGING_DETAILS,
        payload: { clientData: null },
      });
      this.unSubscribeChannel();
      this.log("chat client removed");
    }
  };

  log(message) {
    console.log(`---------${message}------`);
  }
}
