import React from "react";
import ChatBox from "component/common/Message/ChatBox";
import { CommonPageLoader } from "component/common/CommonPageLoader";
import { getFormatDate } from "service/helperFunctions";
import { UserAvatar } from "component/common/UserAvatar";
import { DoneAll, Done } from "@material-ui/icons";

export const MessageComponent = ({
  isMessageListLoading,
  messageData = [],
  PopulateContacts = () => {},
}) => {
  return (
    <div className="message_inner_one">
      <div className="message_left">
        {/* MESSAGE TAB DATA COMPONENTS */}
        {!isMessageListLoading ? (
          messageData.map((item, index) => {
            const { from, body, date_updated } = item.message || {};

            let lastUserProfilePic =
              item["members"]?.filter(({ userId }) => userId === from)[0] ||
              item["members"][0] ||
              {};

            const isMsgAuthor = from === localStorage.getItem("user-id");

            const hasAnyUnReadMessage = item.unReadCount > 0 && !isMsgAuthor;

            // check whether the message is read by all the members
            const isMsgRead = [...(item.members || [])]
              .filter(({ userId }) => userId !== item?.message?.form)
              .every(({ readCount }) => readCount === 0);

            if (isMsgRead) {
              console.log(isMsgRead, item.members);
            }

            // const isAllMessagesRead = isMsgAuthor && item.unReadCount === 0;
            return (
              <div className="contact_item" key={`${Date.now()}_${index}`}>
                <div className="inner_link">
                  <UserAvatar {...lastUserProfilePic} className="img-md-2" />
                  <div
                    className={`message_link_notify ${
                      hasAnyUnReadMessage ? "message-unread" : ""
                    }`}
                    // className={`message_link_notify`}
                    onClick={() =>
                      PopulateContacts(
                        item["channelUniqueName"],
                        item["members"],
                        item
                      )
                    }
                  >
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ display: "flex", width: "85%" }}>
                        <h3 style={{ textTransform: "Capitalize" }}>
                          {item["chatTitle"] || ""}
                        </h3>
                        <h3>
                          &ensp;
                          {item["members"].length > 2
                            ? "+  " + (item["members"].length - 2)
                            : null}
                        </h3>
                      </div>
                      {date_updated && (
                        <span className="msg-timestamp-left">
                          {getFormatDate(date_updated, "LT")}
                        </span>
                      )}
                    </div>
                    <div className="position-relative w-100 d-flex align-items-start justify-content-start">
                      {isMsgAuthor && (
                        <>
                          {isMsgRead ? (
                            <DoneAll className="message-read-icon" />
                          ) : (
                            <Done className="message-read-icon" />
                          )}
                        </>
                      )}
                      {body && (
                        <p>{`${body?.slice(0, 100)}${
                          body?.length > 100 ? "..." : ""
                        }`}</p>
                      )}
                      {/* {date_updated && (
                        <span className="msg-timestamp-left">
                          {getFormatDate(date_updated, "LT")}
                        </span>
                      )} */}
                      {item.unReadCount > 0 && !isMsgAuthor && (
                        <span className="unread-badge">{`${
                          item.unReadCount < 10 ? item.unReadCount : "9+"
                        }`}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <CommonPageLoader />
        )}
      </div>
      <div className="message_right">
        <ChatBox isDataPresent={messageData.length > 0} />
      </div>
    </div>
  );
};
