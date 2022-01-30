import React from "react";
import "./styles.scss";

function ChatList({ channelListData }) {
  React.useEffect(() => {
    console.log("d", channelListData);
  }, [channelListData]);

  return (
    <div className="chat_list_container">
      {channelListData?.length !== 0 ? (
        <div>
          {channelListData?.map((item, id) => {
            return <p>User {id}</p>;
          })}
        </div>
      ) : (
        <p>No Contacts</p>
      )}
    </div>
  );
}

export default ChatList;
