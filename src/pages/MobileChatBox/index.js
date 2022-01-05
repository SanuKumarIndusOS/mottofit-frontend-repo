
import React from "react";
import ChatBox from "component/common/Message/ChatBox";
import { Link } from "react-router-dom";

const ChatMobile = () => {
    return (
        <div>
           {/* <Link to="">back</Link>  */}
            <ChatBox isDataPresent={1 > 0} />
        </div>
    );
};
export default ChatMobile;
