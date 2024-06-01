import "./joke.css";
import { useState } from "react";

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [like, setLike] = useState(likes);
  const [dislike, setDislike] = useState(dislikes);

  const handleClick = (event) => {
    if (event.target.id === "btn-up") {
      setLike(like + 1);
    } else if (event.target.id === "btn-down") {
      setDislike(dislike + 1);
    }
  };

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={handleClick}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {like}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={handleClick}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {dislike}
        </span>
      </div>
    </div>
  );
};
