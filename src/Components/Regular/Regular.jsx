import React, { Component } from "react";
import { connect } from "react-redux";
import Meme from "../Meme/Meme";
import uuid from "uuid/dist/v4";

class Regular extends Component {
  render() {
    return (
      <div className="Regular d-flex flex-column align-items-center">
        {this.props.memeList.map((meme) => {
          console.log(meme);
          return (
            <Meme
              key={uuid()}
              downvotes={meme.downvotes}
              upvotes={meme.upvotes}
              img="https://www.fedscoop.com/wp-content/uploads/2020/01/census-meme.jpeg"
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProprs = (state) => {
  return { memeList: state.memeList };
};

export default connect(mapStateToProprs)(Regular);
