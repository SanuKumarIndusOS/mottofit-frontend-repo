
import React from "react";
import ChatBox from "component/common/Message/ChatBox";

const ChatMobile = () => {
    return (
        <div>
            <ChatBox isDataPresent={1 > 0} />
        </div>
    );
};
export default ChatMobile;
