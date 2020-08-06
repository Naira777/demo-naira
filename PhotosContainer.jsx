import React from "react";
import Photos from "./Photos";
import { connect } from "react-redux";
import {
  savePhotoSuccess1,
  savePhotoSuccess2,
  savePhotoSuccess3,
} from "./../../../Redux/profile-reducer";


class PhotosContainer extends React.PureComponent {
  render() {
    return (
      <Photos
        photo1={this.props.photo1}
        photo2={this.props.photo2}
        photo3={this.props.photo3}
        savePhotoSuccess1={this.props.savePhotoSuccess1}
        savePhotoSuccess2={this.props.savePhotoSuccess2}
        savePhotoSuccess3={this.props.savePhotoSuccess3}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  photo1: state.profilePage.photo1,
  photo2: state.profilePage.photo2,
  photo3: state.profilePage.photo3,
});

export default connect(mapStateToProps, {
  savePhotoSuccess1,
  savePhotoSuccess2,
  savePhotoSuccess3,
})(PhotosContainer);
