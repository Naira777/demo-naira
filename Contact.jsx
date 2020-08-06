import React from "react";
import s from "./ProfileInfo.module.css";

 const Contact = (props) => {
  return (
    <div className={s.contact}>
      <b>{props.contactTitle}</b>:
      <a className={s.link} href={props.contactValue}>
        {props.contactValue}
      </a>
    </div>
  );
};
export default Contact;