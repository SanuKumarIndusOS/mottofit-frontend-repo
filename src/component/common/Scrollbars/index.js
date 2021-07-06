import React, { Component } from "react";

import { CommonPageLoader } from "../CommonPageLoader";
import { CustomScrollbar } from "./CustomScrollbar";

export class InfiniteScrollComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: "",
      page: 0,
      count: 0,
      total: 0,
      isMobile: false,
      isLoading: false,
      notificationData: [],
      currentDataSize: 0,
      initialLoad: true,
    };

    this.refArray = [];
  }

  toggleContent = (index) => {
    let content = parseInt(index);

    let { showContent, isMobile } = this.state;

    let isSameContent = showContent === content ? "" : content;
    this.setState(
      {
        showContent: isSameContent,
      },
      () => {
        // let offsetTop = this.refArray[index].offsetTop;
        // isMobile && window.scrollTo(0, offsetTop + 100);
      }
    );
  };

  handleAboutToReachBottom = async () => {
    const { isLoading, page } = this.state;

    const { handleApi } = this.props;

    this.setState({
      isLoading: true,
    });

    // load more
    if (isLoading === false) {
      let { data } = await handleApi(page + 1);
      this.setState({
        page: page + 1,
        isLoading: false,
      });
    }
  };

  handleUpdate = (values) => {
    const { scrollTop, scrollHeight, clientHeight } = values;
    const { isLoading, total, currentDataSize } = this.state;
    const pad = 100; // 100px of the bottom
    // t will be greater than 1 if we are about to reach the bottom
    const t = (scrollTop + pad) / (scrollHeight - clientHeight);
    // console.log(scrollTop, scrollHeight, clientHeight , t);

    if (t > 1 && currentDataSize < total)
      isLoading === false && this.handleAboutToReachBottom();
  };

  componentDidUpdate(prevProps) {
    const { totalSize } = this.props;

    const { initialLoad, currentDataSize } = this.state;

    if (
      !initialLoad &&
      currentDataSize === 0 &&
      totalSize !== prevProps.totalSize &&
      totalSize > 0
    ) {
      this.setState({
        currentDataSize,
        initialLoad: true,
        total: totalSize,
      });
      console.log("Runned");
    }
  }

  componentDidMount() {
    const { currentDataSize, totalSize } = this.props;

    let mql = window.matchMedia("(max-width: 700px)");
    if (mql.matches) {
      this.setState({
        isMobile: true,
      });
    }

    if (currentDataSize > 0) {
      this.setState({
        total: totalSize,
      });
    } else {
      this.setState({
        initialLoad: false,
      });
    }
  }

  loader = () => {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center w-100 pt-3">
        <CommonPageLoader />
      </div>
    );
  };

  render() {
    const {
      showContent,
      total,
      isMobile,
      isLoading,
      notificationData,
      initialLoad,
      currentDataSize,
    } = this.state;
    let scrollBarStyle = {
      width: "12px",
      right: "5px",
    };

    let heightObj = !isMobile
      ? {
          style: {
            height: 500,
          },
        }
      : {
          style: {
            height: 550,
          },
        };

    let customScrollBarProps = {};

    if (currentDataSize < total)
      customScrollBarProps["onUpdate"] = this.handleUpdate;

    return (
      <div className="notification-page">
        <div className="notification-page-body">
          {initialLoad ? (
            <CustomScrollbar
              customStyle={scrollBarStyle}
              {...heightObj}
              {...customScrollBarProps}
            >
              {this.props.children}

              {isLoading && this.loader()}
            </CustomScrollbar>
          ) : (
            <CommonPageLoader className="mt-5 pt-5" />
          )}
        </div>
      </div>
    );
  }
}
