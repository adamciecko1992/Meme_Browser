import React from "react";
import Header from "./Components/Header/Header";
import Reader from "./Components/Reader/Reader";
import Nav from "./Components/Nav/Nav";
import { Explanation } from "./Components/Explanation/Explanation";

import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header />
        <Nav />
        <main className="row d-flex">
          <Reader />
        </main>
        <aside>
          <Explanation />
        </aside>
      </div>
    );
  }
}
export default App;
