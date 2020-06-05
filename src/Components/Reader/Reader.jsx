import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import "./Reader.scss";
import Regular from "../Regular/Regular";
import Hot from "../Hot/Hot";
import ErrorPage from "../ErrorPage/ErrorPage";

class Reader extends Component {
  findClickedMeme = (clickedMemeId) => {
    const clickedMeme = this.memesList.memes.filter((meme) => {
      return meme.id === clickedMemeId;
    });
    const index = this.memesList.memes.findIndex(
      (meme) => meme.id === clickedMeme[0].id
    );
    return index;
  };
  upvote = (clickedMemeId) => {
    const index = this.findClickedMeme(clickedMemeId);
    this.props.upvote(index);
    console.log(this.props);
  };
  downvote = (clickedMemeId) => {
    const index = this.findClickedMeme(clickedMemeId);
    this.props.downvote(index);
  };
  componentDidMount() {
    axios
      .get(
        "https://api.github.com/repos/adamciecko1992/Meme_Browser/contents/src/data/memes.json"
      )
      .then((data) => {
        this.memesList = JSON.parse(atob(data.data.content));
        this.props.updateMemeList(this.memesList.memes);
      });
  }
  render() {
    return (
      <div className="Reader bg-secondary col-10">
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
const mapDispatchToProps = (dispatch) => {
  return {
    updateMemeList: (memeList) => {
      dispatch({ type: "UPDATE_LIST", value: memeList });

    },
    upvote: (clickedMemeIndex) => {
      dispatch({ type: "UPVOTE", value: clickedMemeIndex });

    },
    downvote: (clickedMemeIndex) => {
      dispatch({ type: "DOWNVOTE", value: clickedMemeIndex });
    },
  };
};
export default connect(mapStateToPorps, mapDispatchToProps)(Reader);
