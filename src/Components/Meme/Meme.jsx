import React from "react";

function Meme() {
  return (
    <>
      <h3>{this.props.title}</h3>
      <img src={this.props.img} alt="Meme img" />
      <p>{this.props.content}</p>
      <button className="btn btn-primary" onClick={this.props.upvote}>
        Upvote
      </button>
      <button className="btn btn-danger" onClick={this.props.downvote}>
        Downvote
      </button>
    </>
  );
}

export default Meme;
