import React from "react";
import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { required } from "../../.vs/src/utils/validators/validators";
import { connect } from "react-redux";
import {
  login,
 } from "../../Redux/auth-reducer";
import { Redirect } from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css";
import { createField } from "../common/FormsControls/FormsControls";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Email"}
          name={"email"}
          validate={[required]}
          component={Input}
        />
      </div>

      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          type={"password"}
          validate={[required]}
          component={Input}
        />
      </div>

      <div>
        <Field component={Input} name={"rememberMe"} type={"checkbox"} />{" "}
        Remember me
      </div>

      {props.captchaUrl && <img src={props.captchaUrl} />}
      {props.captchaUrl &&
        createField("Symbols from image", "captcha", [required], Input, {})}

      {props.error && (
        <div className={style.formSummaryError}>{props.error}</div>
      )}

      <div>
        <button> Login </button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };

 return (
    <div>
      <h1> LOGIN </h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  email: state.auth.email,
});

export default connect(mapStateToProps, { login })(Login);
