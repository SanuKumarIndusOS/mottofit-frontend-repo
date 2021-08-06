import React from "react";
import ChatBox from "component/common/Message/ChatBox";
import { CommonPageLoader } from "component/common/CommonPageLoader";
import { getFormatDate } from "service/helperFunctions";
import { UserAvatar } from "component/common/UserAvatar";

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
            return (
              <div className="contact_item" key={`${Date.now()}_${index}`}>
                <div className="inner_link">
                  <UserAvatar {...lastUserProfilePic} className="img-md-2" />
                  <div
                    className="message_link_notify"
                    onClick={() =>
                      PopulateContacts(
                        item["channelUniqueName"],
                        item["members"],
                        item
                      )
                    }
                  >
                    <div style={{ display: "flex" }}>
                      <h3>{item["chatTitle"] || ""}</h3>
                      <h3>
                        &ensp;
                        {item["members"].length > 2
                          ? "+  " + (item["members"].length - 2)
                          : null}
                      </h3>
                    </div>
                    <div>
                      {body && (
                        <p>{`${body?.slice(0, 100)}${
                          body?.length > 100 ? "..." : ""
                        }`}</p>
                      )}
                      {date_updated && (
                        <span className="msg-timestamp-left">
                          {getFormatDate(date_updated, "LT")}
                        </span>
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
