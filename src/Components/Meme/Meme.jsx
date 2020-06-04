import React from "react";
import "./Meme.scss";

function Meme(props) {
  return (
    <div className="Meme">
      <h3>{props.title}</h3>
      <div className="card">
        <div className="card-header">{props.title}</div>
        <div className="card-image-top">
          <img src={props.img} alt="Meme img" />
        </div>
        <div className="card-body"></div>
        <div className="card-footer">
          <button
            className="btn btn-primary mr-3"
            onClick={() => props.upvote(props.id)}
          >
            Upvote <span className="badge border">{props.upvotes}</span>
          </button>
          <button
            className="btn btn-danger"
            onClick={() => props.downvote(props.id)}
          >
            Downvote <span className="badge border">{props.downvotes}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Meme;
