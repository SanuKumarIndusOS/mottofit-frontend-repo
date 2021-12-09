import React from "react";
import "./styles.scss";

function TabControl({ handleChangeTab, activeTab }) {
  const tabHeader = ["upcoming", "invited", "motto package", "previous"];

  return (
    <div className="tab-control-container">
      {tabHeader?.map((item) => {
        return (
          <div className="tab-control">
            <div
              className={
                item === activeTab
                  ? "tab-control__txt active__header"
                  : "tab-control__txt"
              }
              onClick={() => handleChangeTab(item)}
            >
              {item}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TabControl;
