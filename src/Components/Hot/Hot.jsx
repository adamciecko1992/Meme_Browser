import React, { Component } from "react";
import { connect } from "react-redux";

class Hot extends Component {
  render() {
    return <div className="example">Hot</div>;
  }
}

const mapStateToProprs = (state) => {
  return { regularList: state.memeList };
};

export default connect(mapStateToProprs)(Hot);
