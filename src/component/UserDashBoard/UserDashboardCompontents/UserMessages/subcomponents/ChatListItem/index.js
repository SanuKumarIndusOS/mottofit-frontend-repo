import React from 'react';
import "./styles.scss";

function ChatListItem() {
  return <div className='chat_list_item_container'>
      <div  className='list_item_content'>
      <div className='avatar'></div>
      <div className='name'>User</div>
      {/* <div className='time'>11:00 am</div> */}
      </div>
  </div>;
}

export default ChatListItem;
