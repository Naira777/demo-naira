import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import SearchUserReduxForm from "./SearchUser";
import DisplayUser from "./DisplayUser";
import {
  follow,
  unfollow,
  toggleFollowingProgress,
  requestUsersbyName,
} from "../../../Redux/users-reducer";
import Preloader from "../../common/Preloader/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const SearchForUser = React.memo((props) => {
let [editMode, setEditeMode] = useState(true);

  const onSubmit = (formData) => {
    const name = formData.searchedName;
    props.requestUsersbyName(name).then(() => {
      setEditeMode(false);
    });
  };

  return (
    <>
      {props.isFetching ? <Preloader /> : null}
      <div>{editMode && <SearchUserReduxForm onSubmit={onSubmit} />}</div>

      <div>
        {!editMode && (
          <DisplayUser
            users={props.searchedUsers}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
            {...props}
          />
        )}
      </div>
    </>
  );
});

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  searchedUsers: state.usersPage.searchedUsers,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress,
});

export default  connect(mapStateToProps, {
    requestUsersbyName,
    toggleFollowingProgress,
    follow,
    unfollow,
  })(SearchForUser);
