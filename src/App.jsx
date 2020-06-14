import React from "react";
import Header from "./Components/Header/Header";
import Reader from "./Components/Reader/Reader";
import Nav from "./Components/Nav/Nav";
import "./App.scss";


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
export default App;
