import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../.vs/src/assect/images/user.png";
import ProfileDataForm from "./ProfileDataForm";
import Contact from "./Contact";

const ProfileInfo = (props) => {
  const [editMode, setEditeMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = async (formData) => {
     await props.saveProfile(formData).then(() => {
      setEditeMode(false);
    });
  };

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img
          src={props.profile.photos.large || userPhoto}
          className={s.mainPhoto}
        />

        {props.isOwner && (
          <div className={s.profilephoto}> Change your profile photo </div>
        )}
        {props.isOwner && (
          <input
            className={s.changephoto}
            type={"file"}
            onChange={onMainPhotoSelected}
          />
        )}

        {editMode ? (
          <ProfileDataForm
            initialValues={props.profile}
            onSubmit={onSubmit}
            profile={props.profile}
          />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditeMode(true);
            }}
            profile={props.profile}
            isOwner={props.isOwner}
            status={props.status}
          />
        )}

        {props.isOwner && (
          <ProfileStatus
            status={props.status}
            updateStatus={props.updateStatus}
            isOwner={props.isOwner}
          />
        )}
      </div>
    </div>
  );
};

const ProfileData = (props) => {
  return (
    <div>
      {props.isOwner && (
        <div>
          {" "}
          <button onClick={props.goToEditMode}> Edit </button>{" "}
        </div>
      )}

      <div>
        <b>Full Name</b>: {props.profile.fullName}
      </div>

      <div>
        <b>Looking for a job </b>: {props.profile.lookingForAJob ? "yes" : "no"}
      </div>

      {props.profile.lookingForAJob && (
        <div>
          <b>My professional skills</b>:
          {props.profile.lookingForAJobDescription}
        </div>
      )}

      <div>
        <b>About me</b>: {props.profile.aboutMe}
      </div>

      <div>
        {!props.isOwner && (
          <div>
            <b> Contacts </b>:
            {Object.keys(props.profile.contacts).map((key) => {
              return (
                <Contact
                  key={key}
                  contactTitle={key}
                  contactValue={props.profile.contacts[key]}
                />
              );
            })}
          </div>
        )}

        {!props.isOwner && (
          <div>
            <b>Status</b>: {props.status || "----"}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
