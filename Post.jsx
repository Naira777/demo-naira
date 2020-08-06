import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://images.firstpost.com/wp-content/uploads/2017/04/avatar-380..jpg" />

      {props.message}

      <div>
        <span> Like </span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
