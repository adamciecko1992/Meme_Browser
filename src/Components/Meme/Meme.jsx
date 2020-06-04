import React from "react";

function Meme(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <div className="card">
        <div className="card-header">{props.title}</div>
        <div className="card-body">
          <img src={props.img} alt="Meme img" />
        </div>
        <div className="card-footer">
          <button
            className="btn btn-primary mr-3"
            onClick={() => props.upvote(props.title)}
          >
            Upvote <span className="badge border">{props.upvotes}</span>
          </button>
          <button className="btn btn-danger" onClick={props.downvote}>
            Downvote <span className="badge border">{props.downvotes}</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Meme;
