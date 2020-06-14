import React from "react";
import Meme from "../Meme/Meme";
import uuid from "uuid/dist/v4";

function Hot(props) {
  return (
    <div className="Regular d-flex flex-column align-items-center">
      {props.memes.filter((meme) => meme.upvotes - meme.downvotes > 5).map((meme) => {
        return (
          <Meme
            key={uuid()}
            downvotes={meme.downvotes}
            upvotes={meme.upvotes}
            upvote={props.upvote}
            downvote={props.downvote}
            img={meme.img}
            title={meme.title}
            id={meme.id}
          />
        );
      })}
    </div>
  );
}

export default Hot;
