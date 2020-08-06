import React from "react";
import s from "./Myposts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../.vs/src/utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          placeholder={"Post Message"}
          name="newPostText"
          validate={[required, maxLength10]}
        />
      </div>

      <div>
        <button> Add post </button>
      </div>
    </form>
  );
};

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);

const MyPosts = React.memo((props) => {
  const postsElements = props.posts.map((p) => (
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  const onAddPost = (values) => {
    props.addPost(values.newPostText);
    values.newPostText = "";
  };

  return (
    <div className={s.postsBlock}>
      <h3> My Posts </h3>

      <AddNewPostFormRedux onSubmit={onAddPost} />

      <div className={s.posts}>{postsElements}</div>
    </div>
  );
});

export default MyPosts;
