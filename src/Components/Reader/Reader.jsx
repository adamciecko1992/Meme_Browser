import React, { Component } from "react";
import { connect } from "react-redux";
import "./Reader.scss";

class Reader extends Component {
  render() {
    console.log("TCL: Reader -> ", this.props);
    return (
      <div className="Reader bg-secondary col-10">{this.props.regular}</div>
    );
  }
}

const mapStateToPorps = (state) => {
  return { regular: state.memeList, hot: state.hot };
};
export default connect(mapStateToPorps)(Reader);
