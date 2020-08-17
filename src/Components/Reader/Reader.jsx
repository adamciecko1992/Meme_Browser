import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { downvote, updateMemeList, upvote } from "../../actions";
import "./Reader.scss";
import Regular from "../Regular/Regular";
import Hot from "../Hot/Hot";
import ErrorPage from "../ErrorPage/ErrorPage";

class Reader extends Component {
  findClickedMeme = (clickedMemeId) => {
    const clickedMeme = this.memesList.filter((meme) => {
      return meme.id === clickedMemeId;
    });
    const index = this.memesList.findIndex(
      (meme) => meme.id === clickedMeme[0].id
    );
    return index;
  };
  upvote = (clickedMemeId) => {
    const index = this.findClickedMeme(clickedMemeId);
    this.props.upvote(index);
  };
  downvote = (clickedMemeId) => {
    const index = this.findClickedMeme(clickedMemeId);
    this.props.downvote(index);
  };
  componentDidMount() {
    axios.get("https://api.imgflip.com/get_memes").then(
      ({
        data: {
          data: { memes },
        },
      }) => {
        const memesWithVotes = memes.map((meme) => {
          meme.upvotes = Math.floor(Math.random() * 20 + 1);
          meme.downvotes = Math.floor(Math.random() * 20 + 1);
          return meme;
        });
        this.memesList = memesWithVotes;
        this.props.updateMemeList(memesWithVotes);
      }
    );
  }

  render() {
    return (
      <div className="Reader ">
        <Switch>
          <Route
            path="/hot"
            render={() => (
              <Hot
                upvote={this.upvote}
                downvote={this.downvote}
                memes={this.props.memeList}
              />
            )}
          ></Route>
          <Route
            exact
            path="/"
            render={() => (
              <Regular
                memes={this.props.memeList}
                upvote={this.upvote}
                downvote={this.downvote}
              />
            )}
          ></Route>
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToPorps = (state) => {
  return { memeList: state.memeList };
};
const mapDispatchToProps = {
  updateMemeList,
  upvote,
  downvote,
};
export default connect(mapStateToPorps, mapDispatchToProps)(Reader);
