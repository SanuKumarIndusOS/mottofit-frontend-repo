// import Chat from "twilio-chat";

// // import config from "../../config";

// import { MessagingActionType } from "../service/actionType";
// import { twilioApi } from "../service/apiVariables";
// import { api } from "../service/api";
// import { Toast } from "../service/toast";
// import { updatePersonTyping } from "../action/messagingAct";

// export default class TwilioMessaging {
//   constructor(token, handler, reduxState) {
//     this.channelName = null;

//     this.handler = handler;

//     this.activeChannel = null;

//     this.client = null;

//     this.initClient();
//   }

//   async initClient() {
//     const token = await this.getToken();

//     const client = await Chat.Client.create(token);

//     this.client = client;

//     this.handler({
//       type: MessagingActionType.INITIALIZE_CLIENT,
//       payload: client,
//     });

//     this.initClientListeners(client);
//   }

//   initClientListeners(client) {
//     // REMOVE ALL THE EXISTING LISTENERS
//     client.removeAllListeners();

//     client.on("channelJoined", async (channel) => {
//       // getting list of all messages since this is an existing channel
//       await this.handler(this.onChanelJoined(channel));
//     });

//     // LISTEN FOR GLOBAL MESSAGES

//     client.on("messageAdded", async (message) => {
//       await this.handler(this.onMessagedAdded(message));
//     });

//     // LISTEN FOR PERSON WHOSE ARE TYPING
//     client.on("typingStarted", (participant) => {
//       this.handler(this.onParticipantStartTyping(participant));
//     });

//     // LISTEN FOR PERSON WHOM HAVE STOP TYPING
//     client.on("typingEnded", (participant) => {
//       this.handler(this.onParticipantEndedTyping(participant));
//     });

//     //LISTEN AND UPDATE IF TOKEN IS ABOUT TO EXPIRE

//     client.on("tokenAboutToExpire", async () => {
//       const token = await this.getToken();
//       client.updateToken(token);
//     });

//     // LISTEN IF ALREADY TOKEN HAS EXPIRED

//     client.on("tokenExpired", async () => {
//       const token = await this.getToken();
//       client.updateToken(token);
//     });
//   }

//   async joinChannelByID(uniqueChannelId) {
//     return new Promise(async (resolve, reject) => {
//       try {
//         const channel = await this.client.getChannelByUniqueName(
//           uniqueChannelId
//         );
//         await this.joinChannel(channel);

//         this.activeChannel = channel;

//         // LISTEN ON CHANNEL MESSAGE ADDED

//         channel.on("messageAdded", async (message) => {
//           await this.handler(this.onMessagedAdded(message));
//         });

//         // LISTEN FOR PERSON WHOSE ARE TYPING
//         channel.on("typingStarted", (participant) => {
//           this.handler(this.onParticipantStartTyping(participant));
//         });

//         // LISTEN FOR PERSON WHOM HAVE STOP TYPING
//         channel.on("typingEnded", (participant) => {
//           this.handler(this.onParticipantEndedTyping(participant));
//         });
//         this.handler({
//           type: MessagingActionType.UPDATE_CHANNEL_DETAILS,
//           payload: channel,
//         });
//         resolve(true);
//       } catch (err) {
//         reject(err);
//       }
//     });
//   }

//   async joinChannel(channel) {
//     if (channel.channelState.status !== "joined") {
//       await channel.join();
//     }
//   }

//   // FUNC FIRES WHEN USER JOINED IN A CHANNEL

//   async onChanelJoined(channel) {
//     const messages = await channel.getMessages();
//     //  console.log(messages);
//     let tempMessage = messages.items || [];
//     return {
//       type: MessagingActionType.UPDATE_MESSAGING_DETAILS,
//       activeChannelMessages: [...tempMessage],
//     };
//   }

//   // FUNC FIRES WHEN USER RECIVES MESSAGE

//   onMessagedAdded(message) {
//     const { channel } = message;
//     if (channel.sid !== this.activeChannel.sid) {
//       console.log(message, "msg", "diff channel");
//       return {};
//     } else {
//       return {
//         type: MessagingActionType.UPDATE_MESSAGE_DETAILS,
//         payload: message,
//       };
//     }
//   }

//   // WHEN PERSON STARTS TYPING THIS FUNC FIRES

//   onParticipantStartTyping(participant) {
//     let payload = {
//       type: "typingStarted",
//       participant,
//     };
//     updatePersonTyping(payload)(this.handler);
//   }

//   // WHEN PERSON STOPS TYPING THIS FUNC FIRES

//   onParticipantEndedTyping(participant) {
//     let payload = {
//       type: "typingEnded",
//       participant,
//     };
//     updatePersonTyping(payload)(this.handler);
//   }

//   getToken = () => {
//     const { getIdentityToken } = twilioApi;

//     return new Promise((resolve, reject) => {
//       api({ ...getIdentityToken })
//         .then(({ chatToken }) => {
//           console.log(chatToken);
//           resolve(chatToken);
//         })
//         .catch((err) => {
//           Toast({ type: "error", message: err.message || "Error" });
//           reject(err);
//         });
//     });
//   };
// }
