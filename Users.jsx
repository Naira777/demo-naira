import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = React.memo(
  ({
    currentPage,
    onPageChanged,
    totalUsersCount,
    pageSize,
    users,
    ...props
  }) => {
    return (
      <div>
        <Paginator
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          totalItemsCount={totalUsersCount}
          pageSize={pageSize}
        />

        <div className="d-flex flex-wrap">
          {users.map((u) => (
            <div className="p-2 bd-highlight">
              <User
                user={u}
                key={u.id}
                followingInProgress={props.followingInProgress}
                unfollow={props.unfollow}
                follow={props.follow}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
);

export default Users;
