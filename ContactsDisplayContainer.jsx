import React from "react";
import ContactsDisplay from "./ContactsDisplay";
import { connect } from "react-redux";
import { getUserProfile } from "../../../../Redux/profile-reducer";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";

class ContactsDisplayContainer extends React.PureComponent {
  componentDidMount() {
    const userId = this.props.authorizedUserId;
    this.props.getUserProfile(userId);
  }

  render() {
    return (
      <ContactsDisplay
        profile={this.props.profile}
        isAuth={this.props.isAuth}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  authorizedUserId: state.auth.userId,
});

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withAuthRedirect
)(ContactsDisplayContainer);
