import React from "react";
import Header from "./Components/Header/Header";
import Reader from "./Components/Reader/Reader";
import Nav from "./Components/Nav/Nav";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header /> <Nav />
        <div className="container">
          <div className="row d-flex">
            <Reader />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
