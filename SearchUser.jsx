import React from "react";
import { Input } from "../../common/FormsControls/FormsControls";
import { reduxForm, Field } from "redux-form";

const SearchUserForm = (props) => {
  return (
    <div>
      <label>
        <h3> SEARCH USER </h3>
      </label>

      <form class="form-inline" onSubmit={props.handleSubmit}>
        <Field
          component={Input}
          name={"searchedName"}
          type={"search"}
          placeholder={"Search user by name"}
          aria-label="Search"
          class="form-control mr-sm-2"
        />

        <button class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
const SearchUserReduxForm = reduxForm({ form: "search" })(SearchUserForm);

export default SearchUserReduxForm;
