import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

export class CustomScrollbar extends Component {
  scrollbars = React.createRef();
  state = {
    mounted: false,
  };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  componentDidUpdate() {
    const { scrollToBottomUpdate = false } = this.props;
    scrollToBottomUpdate &&
      this.state.mounted &&
      this.scrollbars.current.scrollToBottom();
  }

  renderView({ style, ...props }) {
    return <div style={{ ...style }} {...props} className="h" />;
  }

  //THUMB STYLES

  renderThumb = ({ style, ...props }) => {
    const { customStyle } = this.props;
    const thumbStyle = {
      backgroundColor: "#f2f2f2",
      borderRadius: "8px",
      width: "16px",
      ...customStyle,
    };

    return (
      <div
        style={{ ...style, ...thumbStyle }}
        {...props}
        className="render-y"
      />
    );
  };

  render() {
    const { customStyle, ...restProps } = this.props;
    return (
      <Scrollbars
        ref={this.scrollbars}
        renderThumbHorizontal={this.renderThumb}
        renderThumbVertical={this.renderThumb}
        // renderTrackHorizontal={this.renderView}
        renderView={this.renderView}
        {...restProps}
      />
    );
  }
}
