import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import "./Reader.scss";
import Regular from "../Regular/Regular";
import Hot from "../Hot/Hot";
import ErrorPage from "../ErrorPage/ErrorPage";

class Reader extends Component {
  constructor(props) {
    super(props);
    this.memes = [];
    this.memesList = [];
  }
  upvote = (clickedMemeTitle) => {
    const clickedMeme = this.memesList.memes.filter((meme) => {
      console.log(meme.title);
      return meme.title === clickedMemeTitle;
    });
  };
  componentDidMount() {
    axios
      .get(
        "https://api.github.com/repos/adamciecko1992/Meme_Browser/contents/src/data/memes.json"
      )
      .then((data) => {
        this.memesList = JSON.parse(atob(data.data.content));
        this.props.updateMemeList(this.memesList);
      });
  }
  render() {
    return (
      <div className="Reader bg-secondary col-10">
        <Switch>
          <Route path="/hot" render={(props) => <Hot />}></Route>
          <Route
            exact
            path="/"
            render={() => (
              <Regular regular={this.props.regular} upvote={this.upvote} />
            )}
          ></Route>
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToPorps = (state) => {
  return { regular: state.memeList, hot: state.hot };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateMemeList: (memeList) => {
      dispatch({ type: "UPDATE_LIST", value: memeList });
    },
  };
};
export default connect(mapStateToPorps, mapDispatchToProps)(Reader);
