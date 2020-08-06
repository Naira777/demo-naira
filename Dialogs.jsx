import React from "react";
import s from "./Dialogs.module.css";
import { NavLink, Redirect } from "react-router-dom";
import Message from "../Dialogs/Message/Message";
import DialogItem from "../Dialogs/DialogItem/DialogItem";
import AddMessageFormRedux from "./Message/AddMessageForm";

const Dialogs = React.memo((props) => {
  const state = props.dialogsPage;
  const dialogsElements = state.dialogs.map((d) => (
    <DialogItem name={d.name} key={d.id} id={d.id} />
  ));

  const messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
    values.newMessageBody = "";
  };


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>
        {messagesElements}
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  );
});

export default Dialogs;
