import React from "react";
import Paginator from "../common/Paginator/Paginator";
import StatusUser from "./statusUser";

const UsersWithStatus = React.memo((props) => {
  return (
    <div>
      <h3>Users with Status</h3>

      <Paginator
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
      />

      {props.users.map((u) => (
        <StatusUser key={u.id} user={u} />
      ))}
    </div>
  );
});

export default UsersWithStatus;
