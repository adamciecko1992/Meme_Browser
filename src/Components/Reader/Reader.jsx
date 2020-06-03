import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

import Regular from "../Regular/Regular";
import Hot from "../Hot/Hot";
import "./Reader.scss";

class Reader extends Component {
  componentDidMount() {
    axios
      .get(
        "https://api.github.com/repos/adamciecko1992/Meme_Browser/contents/src/data/memes.json"
      )
      .then((data) => {
        const memes = atob(data.data.content);
        this.props.updateMemeList(memes);
      });
  }
  render() {
    return (
      <>
        <Router>
          <div className="Nav col-2 bg-white pt-3">
            <ul className="list-group-flush text-center">
              <li className="list-group-item bg-primary bg-danger">
                <Link
                  to={"/regular"}
                  className="text-white text-decoration-none"
                >
                  Regular
                </Link>
              </li>
              <li className="list-group-item px-0 bg-secondary">
                <Link to={"/hot"} className="text-white text-decoration-none">
                  Hot
                </Link>
              </li>
            </ul>
          </div>

          <div className="Reader bg-secondary col-10">
            <Switch>
              <Route path="/hot" render={(props) => <Hot />}></Route>
              <Route path="/regular" render={(props) => <Regular />}></Route>
            </Switch>
          </div>
        </Router>
      </>
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
