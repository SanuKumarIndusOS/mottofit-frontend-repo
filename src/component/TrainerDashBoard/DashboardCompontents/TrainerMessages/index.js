import React from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import "./style.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Jenny from "../../../../assets/files/TrainerDashboard/Message/Jenny.png";
import Jonn from "../../../../assets/files/TrainerDashboard/Message/Image 1.png";
import SheduleIcon from "../../../../assets/files/TrainerDashboard/Message/Shedule Icon.svg";
import AvailabilityIcon from "../../../../assets/files/TrainerDashboard/Message/Availability Icon.svg";
import LocationIcon from "../../../../assets/files/TrainerDashboard/Message/Location Icon.svg";
import { set } from "date-fns";
import BlueHoverButton from "../../../common/BlueArrowButton/index";

const Chatt = require("twilio-chat");

const TrainerMessage = () => {
    const [individual_list, setIndividual] = React.useState([]);
    const [socialGroup_list, setSocialGroup_list] = React.useState([]);
    const [admin_list, setAdmin_list] = React.useState([]);
    const [Channel, setChannel] = React.useState([]);
    const [Client, setClient] = React.useState();
    const [messages, setMessages] = React.useState([]);
    const [text_thread, setText_thread] = React.useState([]);
    const [chattoken, setToken] = React.useState("");
    const [channel_id, setChannel_id] = React.useState("");

    // Make Id dynamic
    React.useEffect(() => {
        var btoken = localStorage.getItem("token")
        fetch(
            "http://doodlebluelive.com:2338/v1/token?identity=7f007fd1-7042-4c1c-b8ea-3d739cf9f707",
            {
                method: "get",
                headers: new Headers({
                    Authorization: btoken,
                    "Content-Type": "application/x-www-form-urlencoded",
                }),
            }
        )
            .then((response) => response.json())
            .then((data) => {
                //console.log(data['chatToken']);
                setToken(data["chatToken"]);

                // var channel;

                // Chatt.Client.create(data["chatToken"]).then((client) => {
                //   // Use client

                //   // client.getChannelByUniqueName(channel_id).then((res) => {
                //   //   console.log(res);
                //   //   channel = res;
                //   //   setChannel(channel);
                //   //   channel.join();
                //   // });

                //   setClient(client);

                //   // client.on("channelJoined", async (channel) => {
                //   //   // getting list of all messages since this is an existing channel
                //   //   console.log("joined");
                //   //   const message = await channel.getMessages();
                //   //   // this.setState({ messages: messages.items || [] });
                //   //   setMessages(message["items"]);
                //   //   console.log(message["items"][0]);
                //   //   // scrollToBottom();
                //   // });
                // });
            });

        // Twilio initialisation
        // var token = chattoken;
        // var channel;
        // Chatt.Client.create(chattoken).then((client) => {
        //   // Use client

        //   client
        //     .getChannelByUniqueName("CH968a07b6614642508c1cfda691f4c698")
        //     .then((res) => {
        //       console.log(res);
        //       channel = res;
        //       setChannel(channel);
        //       channel.join();
        //     });

        //   setClient(client);

        //   client.on("channelJoined", async (channel) => {
        //     // getting list of all messages since this is an existing channel
        //     console.log("joined");
        //     const message = await channel.getMessages();
        //     // this.setState({ messages: messages.items || [] });
        //     setMessages(message["items"]);
        //     console.log(message["items"][0]);
        //   });
        // });

         

        // Get Contact_list
        fetch("http://doodlebluelive.com:2338/v1/trainer/channel", {
            method: "get",
            headers: new Headers({
                Authorization: btoken,
                "Content-Type": "application/x-www-form-urlencoded",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setIndividual(data["data"]["individualClient"]);
                setSocialGroup_list(data["data"]["socialGroups"]);
                setAdmin_list(data["data"]["admins"]);

                console.log("admin data", admin_list);
            });
    }, []);

    const sendText = () => {
        console.log(text_thread);
        var temp = {};
        temp.state = text_thread;
        Channel.sendMessage(text_thread);
        console.log("text_thread");

        Channel.on("messageAdded", handleMessageAdded);
        //  const message = () => Channel.getMessages();
        //  setMessages([])

        setText_thread(" ");
    };

    const handleMessageAdded = (message) => {
        setMessages((messages) => [...messages, message]);
        console.log(messages);
    };

    async function loadMessages(channelID) {
        setMessages([]);

        console.log("loadMessages", channelID);
        // setChannel_id(channel_id);

        Chatt.Client.create(chattoken).then((client) => {
            var channel;
            client.getChannelByUniqueName(channelID).then((res) => {
                console.log(res);
                channel = res;
                setChannel(channel);
                channel.join();
            });

            client.on("channelAdded", function (channel) {});

            client.on("channelJoined", async (channel) => {
                // getting list of all messages since this is an existing channel
                console.log("joined", channel);
                const message = await channel.getMessages();
                // this.setState({ messages: messages.items || [] });
                setMessages(message["items"]);
                console.log(message["items"]);
                // scrollToBottom();
            });

            client.on("channelRemoved", function (channel) {
                //  setMessages([])
            });
        });
    }

    function PopulateContacts(channelID) {
        console.log("PopulateContacts", channelID);
        // console.log(messages);

        loadMessages(channelID);
    }

    const messagesEndRef = React.useRef();
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <div className="container main_message_container">
                <div className="message_outter_container">
                    <h2>Messages</h2>
                    <div className="message_inner">
                        <div className="message_wrapper">
                            <Tabs
                                defaultTab="one"
                                onChange={(tabId) => {
                                    console.log(tabId);
                                }}
                            >
                                <TabList>
                                    <Tab tabFor="one">All</Tab>
                                    <Tab tabFor="two">INDIVIDUAL CLIENTS</Tab>
                                    <Tab tabFor="three">SOCIAL GROUPS</Tab>
                                    <Tab tabFor="four">ADMIN</Tab>
                                </TabList>
                                <div className="message_inner">
                                    <TabPanel tabId="one">
                                        <div className="message_inner_one">
                                            <div className="message_left">
                                                {/* Todo Change to ALL */}
                                                {[
                                                    ...individual_list,
                                                    ...socialGroup_list,
                                                    ...admin_list,
                                                ].map((item) => {
                                                    //  console.log(item);
                                                    return (
                                                        <div className="contact_item">
                                                            <div className="inner_link">
                                                                <img
                                                                    src={Jenny}
                                                                    alt="icon"
                                                                />
                                                                <div
                                                                    className="message_link_notify"
                                                                    onClick={() =>
                                                                        PopulateContacts(
                                                                            item[
                                                                                "channelUniqueName"
                                                                            ]
                                                                        )
                                                                    }
                                                                >
                                                                    <h3>
                                                                        {
                                                                            item[
                                                                                "members"
                                                                            ][0][
                                                                                "userName"
                                                                            ]
                                                                        }
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <div className="message_right">
                                                <div className="message_right_chatarea">
                                                    <div className="message_right_header">
                                                        <h2>
                                                            Strength & HIIT with
                                                            Jeremy Clark
                                                        </h2>
                                                        <div className="message_header_times">
                                                            <div className="message_header_items">
                                                                <img
                                                                    src={
                                                                        SheduleIcon
                                                                    }
                                                                    alt="icon"
                                                                />
                                                                <h5>
                                                                    {" "}
                                                                    {new Date().toDateString()}
                                                                </h5>
                                                            </div>
                                                            <div className="message_header_items">
                                                                <img
                                                                    src={
                                                                        AvailabilityIcon
                                                                    }
                                                                    alt="icon"
                                                                />
                                                                <h5>
                                                                    {new Date().toLocaleTimeString()}
                                                                </h5>
                                                            </div>
                                                            <div className="message_header_items">
                                                                <img
                                                                    src={
                                                                        LocationIcon
                                                                    }
                                                                    alt="icon"
                                                                />
                                                                <h5>
                                                                    Chennai, TN
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="message_right_textarea">
                                                        {messages.map(
                                                            (item) => {
                                                                // // console.log(item["state"]["body"]);
                                                                return (
                                                                    <RightChat
                                                                        data={
                                                                            item[
                                                                                "state"
                                                                            ][
                                                                                "body"
                                                                            ]
                                                                        }
                                                                    />
                                                                );
                                                            }
                                                        )}
                                                        <div
                                                            ref={messagesEndRef}
                                                        />
                                                    </div>
                                                    <div className="message_right_input">
                                                        <input
                                                            type="text"
                                                            placeholder="Type your message here.."
                                                            value={text_thread}
                                                            onChange={(
                                                                event
                                                            ) => {
                                                                setText_thread(
                                                                    event.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                        <div
                                                            onClick={sendText}
                                                        >
                                                            <BlueHoverButton />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel tabId="two">
                                        <div className="message_inner_one">
                                            <div className="message_left">
                                                {/* Todo Change to ALL */}
                                                {individual_list.map((item) => {
                                                    // // console.log(item["channelId"]);
                                                    return (
                                                        <div className="contact_item">
                                                            <div className="inner_link">
                                                                <img
                                                                    src={Jenny}
                                                                    alt="icon"
                                                                />
                                                                <div
                                                                    className="message_link_notify"
                                                                    onClick={() =>
                                                                        PopulateContacts(
                                                                            item[
                                                                                "channelUniqueName"
                                                                            ]
                                                                        )
                                                                    }
                                                                >
                                                                    <h3>
                                                                        {
                                                                            item[
                                                                                "members"
                                                                            ][0][
                                                                                "userName"
                                                                            ]
                                                                        }
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <div className="message_right">
                                                <div className="message_right_chatarea">
                                                    <div className="message_right_header">
                                                        <h2>
                                                            Strength & HIIT with
                                                            Jeremy Clark
                                                        </h2>
                                                        <div className="message_header_times">
                                                            <div className="message_header_items">
                                                                <img
                                                                    src={
                                                                        SheduleIcon
                                                                    }
                                                                    alt="icon"
                                                                />
                                                                <h5>
                                                                    {" "}
                                                                    {new Date().toDateString()}
                                                                </h5>
                                                            </div>
                                                            <div className="message_header_items">
                                                                <img
                                                                    src={
                                                                        AvailabilityIcon
                                                                    }
                                                                    alt="icon"
                                                                />
                                                                <h5>
                                                                    {new Date().toLocaleTimeString()}
                                                                </h5>
                                                            </div>
                                                            <div className="message_header_items">
                                                                <img
                                                                    src={
                                                                        LocationIcon
                                                                    }
                                                                    alt="icon"
                                                                />
                                                                <h5>
                                                                    Chennai, TN
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="message_right_textarea">
                                                        {messages.map(
                                                            (item) => {
                                                                // console.log(item["state"]["body"]);
                                                                return (
                                                                    <RightChat
                                                                        data={
                                                                            item[
                                                                                "state"
                                                                            ][
                                                                                "body"
                                                                            ]
                                                                        }
                                                                    />
                                                                );
                                                            }
                                                        )}
                                                        <div
                                                            ref={messagesEndRef}
                                                        />
                                                    </div>
                                                    <div className="message_right_input">
                                                        <input
                                                            type="text"
                                                            placeholder="Type your message here.."
                                                            value={text_thread}
                                                            onChange={(
                                                                event
                                                            ) => {
                                                                setText_thread(
                                                                    event.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                        <div
                                                            onClick={sendText} 
                                                        >
                                                             <BlueHoverButton />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel tabId="three">
                                        <div className="message_inner_one">
                                            <div className="message_left">
                                                {/* Todo Change to ALL */}
                                                {socialGroup_list.map(
                                                    (item) => {
                                                        // console.log(item["channelId"]);
                                                        return (
                                                            <div className="contact_item">
                                                                <div className="inner_link">
                                                                    <img
                                                                        src={
                                                                            Jenny
                                                                        }
                                                                        alt="icon"
                                                                    />
                                                                    <div
                                                                        className="message_link_notify"
                                                                        onClick={() =>
                                                                            PopulateContacts(
                                                                                item[
                                                                                    "channelUniqueName"
                                                                                ]
                                                                            )
                                                                        }
                                                                    >
                                                                        <h3>
                                                                            {
                                                                                item[
                                                                                    "members"
                                                                                ][0][
                                                                                    "userName"
                                                                                ]
                                                                            }
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                            <div className="message_right">
                                                <div className="message_right_chatarea">
                                                    <div className="message_right_header">
                                                        <h2>
                                                            Strength & HIIT with
                                                            Jeremy Clark
                                                        </h2>
                                                        <div className="message_header_times">
                                                            <div className="message_header_items">
                                                                <img
                                                                    src={
                                                                        SheduleIcon
                                                                    }
                                                                    alt="icon"
                                                                />
                                                                <h5>
                                                                    {" "}
                                                                    {new Date().toDateString()}
                                                                </h5>
                                                            </div>
                                                            <div className="message_header_items">
                                                                <img
                                                                    src={
                                                                        AvailabilityIcon
                                                                    }
                                                                    alt="icon"
                                                                />
                                                                <h5>
                                                                    {new Date().toLocaleTimeString()}
                                                                </h5>
                                                            </div>
                                                            <div className="message_header_items">
                                                                <img
                                                                    src={
                                                                        LocationIcon
                                                                    }
                                                                    alt="icon"
                                                                />
                                                                <h5>
                                                                    Chennai, TN
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="message_right_textarea">
                                                        {messages.map(
                                                            (item) => {
                                                                // console.log(item["state"]["body"]);
                                                                return (
                                                                    <RightChat
                                                                        data={
                                                                            item[
                                                                                "state"
                                                                            ][
                                                                                "body"
                                                                            ]
                                                                        }
                                                                    />
                                                                );
                                                            }
                                                        )}
                                                        <div
                                                            ref={messagesEndRef}
                                                        />
                                                    </div>
                                                    <div className="message_right_input">
                                                        <input
                                                            type="text"
                                                            placeholder="Type your message here.."
                                                            value={text_thread}
                                                            onChange={(
                                                                event
                                                            ) => {
                                                                setText_thread(
                                                                    event.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                        <div
                                                            onClick={sendText}
                                                        >
                                                            <BlueHoverButton />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel tabId="four">
                                        <div className="message_inner_one">
                                            <div className="message_left">
                                                {/* Todo Change to ALL */}
                                                {admin_list.map((item) => {
                                                    // console.log(item["channelId"]);
                                                    return (
                                                        <div className="contact_item">
                                                            <div className="inner_link">
                                                                <img
                                                                    src={Jenny}
                                                                    alt="icon"
                                                                />
                                                                <div
                                                                    className="message_link_notify"
                                                                    onClick={() =>
                                                                        PopulateContacts(
                                                                            item[
                                                                                "channelUniqueName"
                                                                            ]
                                                                        )
                                                                    }
                                                                >
                                                                    <h3>
                                                                        {
                                                                            item[
                                                                                "members"
                                                                            ][0][
                                                                                "userName"
                                                                            ]
                                                                        }
                                                                    </h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <div className="message_right">
                                                <div className="message_right_chatarea">
                                                    <div className="message_right_header">
                                                        <h2>
                                                            Strength & HIIT with
                                                            Jeremy Clark
                                                        </h2>
                                                        <div className="message_header_times">
                                                            <div className="message_header_items">
                                                                <img
                                                                    src={
                                                                        SheduleIcon
                                                                    }
                                                                    alt="icon"
                                                                />
                                                                <h5>
                                                                    {" "}
                                                                    {new Date().toDateString()}
                                                                </h5>
                                                            </div>
                                                            <div className="message_header_items">
                                                                <img
                                                                    src={
                                                                        AvailabilityIcon
                                                                    }
                                                                    alt="icon"
                                                                />
                                                                <h5>
                                                                    {new Date().toLocaleTimeString()}
                                                                </h5>
                                                            </div>
                                                            <div className="message_header_items">
                                                                <img
                                                                    src={
                                                                        LocationIcon
                                                                    }
                                                                    alt="icon"
                                                                />
                                                                <h5>
                                                                    Chennai, TN
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="message_right_textarea">
                                                        {messages.map(
                                                            (item) => {
                                                                // console.log(item["state"]["body"]);
                                                                return (
                                                                    <RightChat
                                                                        data={
                                                                            item[
                                                                                "state"
                                                                            ][
                                                                                "body"
                                                                            ]
                                                                        }
                                                                    />
                                                                );
                                                            }
                                                        )}
                                                        <div
                                                            ref={messagesEndRef}
                                                        />
                                                    </div>
                                                    <div className="message_right_input">
                                                        <input
                                                            type="text"
                                                            placeholder="Type your message here.."
                                                            value={text_thread}
                                                            onChange={(
                                                                event
                                                            ) => {
                                                                setText_thread(
                                                                    event.target
                                                                        .value
                                                                );
                                                            }}
                                                        />
                                                        <div
                                                            onClick={sendText}
                                                        >
                                                            <BlueHoverButton />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </div>
                            </Tabs>
                            <div className=""></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
const RightChat = (props) => {
    return (
        <>
            <div className="message_chat_right">
                <div className="message_text">
                    <h5>{props.data}</h5>
                </div>

                <img src={Jonn} alt="icon" />
            </div>
        </>
    );
};
// const LeftChat = (props) => {
//     return (
//         <>
//             <div className="message_chat_right">
//                 <div className="message_text">
//                     <h5>{props.data}</h5>
//                 </div>

//                 <img src={Jonn} alt="icon" />
//             </div>
//         </>
//     );
// };
export default TrainerMessage;
