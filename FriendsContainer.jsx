import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requestFollowedUsers,
} from "../../Redux/users-reducer";
import Users from "../Users/Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getFollowedUsersCount,
  getUsers,
  getFollowedUsers,
} from "../../Redux/users-selectors";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import s from "./FriendsContainer.module.css";

class FriendUsersContainer extends React.PureComponent {
  componentDidMount() {
    this.props.requestFollowedUsers(
      1,
      this.props.pageSize
    );
  }

  onPageChanged = (pageNumber) => {
    this.props.requestFollowedUsers(pageNumber, this.props.pageSize);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.followingInProgress !== this.props.followingInProgress) {
      this.props.requestFollowedUsers(
       this.props.currentPage,
        this.props.pageSize
      );
    }
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <div className={s.friends}>Followed Users</div>
        <Users
          totalUsersCount={this.props.followedUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getFollowedUsers(state),
    pageSize: getPageSize(state),
    followedUsersCount: getFollowedUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};
export default compose(connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requestFollowedUsers,
}), withAuthRedirect)(FriendUsersContainer);
