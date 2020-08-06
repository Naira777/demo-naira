import React from "react";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";
import s from "../ProfileInfo/ProfileInfo.module.css";

const ProfileDataForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        {" "}
        <button> Save </button>{" "}
      </div>

      {props.error && (
        <div className={style.formSummaryError}>{props.error}</div>
      )}

      <div>
        <b>Full Name</b>: {createField("Full name", "fullName", [], Input)}
      </div>

      <div>
        <b> Looking for a job </b>:{props.profile.lookingForAJob ? "yes" : "no"}
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>

      <div>
        <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
        {createField(
          "My professional skills",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>

      <div>
        <b>About me</b>:{createField("About me", "aboutMe", [], Textarea)}
      </div>

      <div>
        <b>Contacts</b>:
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <div key={key} className={s.contact}>
              <b>
                {key}: {createField(key, "contacts." + key, [], Input)}
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);

export default ProfileDataFormReduxForm;
