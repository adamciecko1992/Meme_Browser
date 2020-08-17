import React from "react";
import Meme from "../Meme/Meme";

function Hot(props) {
  return (
    <div className="Regular d-flex flex-column align-items-center">
      {props.memes
        .filter((meme) => meme.upvotes - meme.downvotes > 5)
        .map((meme) => {
          return (
            <Meme
              key={meme.id}
              downvotes={meme.downvotes}
              upvotes={meme.upvotes}
              upvote={props.upvote}
              downvote={props.downvote}
              img={meme.url}
              title={meme.name}
              id={meme.id}
            />
          );
        })}
    </div>
  );
}

export default Hot;
