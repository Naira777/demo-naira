import React from "react";
import User from "../User";

const DisplayUser = (props) => {
  return (
    <>
      <div>
        <h3> Search Results </h3>
      </div>

      {props.users.length < 1 && <div>There are no such users</div>}

      <div class="d-flex flex-wrap">
        {props.users.map((u) => (
          <div class="p-2 bd-highlight">
            <User
              user={u}
              key={u.id}
              followingInProgress={props.followingInProgress}
              unfollow={props.unfollow}
              follow={props.follow}
              {...props}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayUser;
