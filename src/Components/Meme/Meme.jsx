import React from "react";
import "./Meme.scss";

function Meme(props) {
  return (
    <div className="Meme mt-5 m-auto ">
      <div className="card justify-content-center mt-5">
        <div className="card-header text-center">{props.title}</div>
        <div className="card-image-top  text-center">
          <img className="h-100" src={props.img} alt="Meme img" />
        </div>
        <div className="card-body p-3"></div>
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
