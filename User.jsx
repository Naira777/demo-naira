import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../.vs/src/assect/images/user.png";
import { NavLink } from "react-router-dom";
import s from "./users.module.css";

const User = React.memo(({ user, followingInProgress, unfollow, follow }) => {
  const u = user;

  return (
    <div className={s.blocks}>
      <span>
        <div>
          <NavLink to={"/profile/ " + u.id}>
            <img
              src={u.photos.small != null ? u.photos.small : userPhoto}
              className={styles.userPhoto}
            />
          </NavLink>
        </div>

        <div>
          {u.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === u.id)}
              onClick={() => {
                unfollow(u.id);
              }}
            >
              {" "}
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === u.id)}
              onClick={() => {
                follow(u.id);
              }}
            >
              {" "}
              Follow
            </button>
          )}
        </div>
      </span>

      <span>
        <div>
          <h6> Name: {u.name} </h6>{" "}
        </div>
        <div>
          <h10>About Me:{u.aboutMe}</h10>
        </div>
        <div>
          <h10>Status:{u.status} </h10>
        </div>
      </span>
    </div>
  );
});

export default User;
