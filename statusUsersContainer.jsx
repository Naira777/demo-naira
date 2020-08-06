import React from "react";
import StatusUsers from "./statusUsers";

import { connect } from "react-redux";
import {
  setCurrentPage,
  requestUsersWithStatus,
  requestUsers,
} from "../../Redux/users-reducer";

import {
  getCurrentPage,
  getTotalUsersCount,
  getPageSizeForStatus,
} from "../../Redux/users-selectors";

class UsersWithStatusContainer extends React.PureComponent {
  componentDidMount() {
 
    this.props.requestUsersWithStatus( 1,this.props.pageSizeForStatus);

    this.props.requestUsers(1, this.props.pageSize); 
   
  }

  onPageChanged = (pageNumber) => {
    this.props.requestUsersWithStatus(pageNumber, this.props.pageSizeForStatus);
  };

  render() {
    return (
      <StatusUsers
        users={this.props.usersWithStatus}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSizeForStatus}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {

    usersWithStatus: state.usersPage.usersWithStatus,
    totalUsersCount: getTotalUsersCount(state),
    pageSizeForStatus: getPageSizeForStatus(state),
    currentPage: getCurrentPage(state),
  };
};

export default connect(mapStateToProps, {
  requestUsersWithStatus,
  setCurrentPage,
  requestUsers,
})(UsersWithStatusContainer);
