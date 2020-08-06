import React from "react";
import Contact from "../Contact";
import { savePhotoSuccess } from "../../../../Redux/profile-reducer";
import s from "./ContactsDisplayContainer.module.css";
import facebook from "../../../../.vs/src/assect/images/facebook.ico";
import twitter_28 from "../../../../.vs/src/assect/images/twitter_28.ico";
import instagram from "../../../../.vs/src/assect/images/instagram.ico";

const ContactsDisplay = (props) => {
  return (
    <>
      {props.isAuth && props.profile && (
        <div className={s.main}>
          <h5>
            {" "}
            <b> My Contacts: </b>{" "}
          </h5>
          <div className={s.icon}>
            <img className={s.photo} src={facebook} />
            <img className={s.photo} src={twitter_28} />
            <img className={s.photo} src={instagram} />
          </div>

          <div className={s.contact}>
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
        </div>
      )}
    </>
  );
};

export default ContactsDisplay;
