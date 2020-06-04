import React, { Component } from "react";
// import { connect } from "react-redux";
import Meme from "../Meme/Meme";
import uuid from "uuid/dist/v4";

class Regular extends Component {
  render() {
    return (
      <div className="Regular d-flex flex-column align-items-center">
        {this.props.regular.map((meme) => {
          return (
            <Meme
              key={uuid()}
              downvotes={meme.downvotes}
              upvotes={meme.upvotes}
              upvote={this.props.upvote}
              img="https://www.fedscoop.com/wp-content/uploads/2020/01/census-meme.jpeg"
              title="The face i make"
            />
          );
        })}
      </div>
    );
  }
}

// const mapStateToProprs = (state) => {
//   return { memeList: state.memeList };
// };

// export default connect(mapStateToProprs)(Regular);

export default Regular;
