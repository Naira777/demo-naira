import React from "react";
import userPhoto from "../../.vs/src/assect/images/user.png";
import styles from "./statusUser.module.css";

const UserWithStatus = (props) => {
  return (
    <div className={styles.blocks}>
      <div>
        <img
          src={
            props.user.photos.small != null
              ? props.user.photos.small
              : userPhoto
          }
          className={styles.userPhoto}
        />{" "}
      </div>

      <div>
        <span>Name: {props.user.name}</span>
      </div>

      <span>Status: {props.user.status} </span>
    </div>
  );
};

export default UserWithStatus;
