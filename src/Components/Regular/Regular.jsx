import React, { Component } from "react";
import { connect } from "react-redux";

class Regular extends Component {
  render() {
    return <div className="example">Example</div>;
  }
}

const mapStateToProprs = (state) => {
  return { regularList: state.memeList };
};

export default connect(mapStateToProprs)(Regular);
