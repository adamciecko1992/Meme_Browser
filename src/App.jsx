import React from "react";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Reader from "./Components/Reader/Reader";
import "./App.scss";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div className="App container-fluid pt-2 px-4">
        <Header />
        <div className="row">
          <Nav />
          <Reader />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { example: state.example, num: state.num, visible: state.visibility };
};
const mapDispatchToProps = (dispatch) => {
  return {
    examp: () => {
      dispatch({ type: "INCREMENT", value: 1 });
    },
    toggleVisibility: () => {
      dispatch({ type: "TOGGLE" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
