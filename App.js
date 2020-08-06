import React, { Component, Suspense } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Navbar from "./Components/Navbar/Navbar";
import { Route, withRouter, Redirect, BrowserRouter } from "react-router-dom";
import UsersContainer from "./Components/Users/UsersContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./Components/common/Preloader/Preloader";
import { initializeApp } from "./Redux/app-reducer";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/redux-store";
import withSuspense from "./Components/hoc/withSuspense";

import FriendUsersContainer from "./Components/Users/FriendsContainer";
import UsersWithStatusContainer from "./../src/Components/Users/statusUsersContainer";
import ProfileMusicPage from "./Components/Profile/ProfileMusic/ProfileMusicContainer";
import SearchForUser from "./Components/Users/Search/SearchUserContainer";
import PhotosContainer from "./Components/Header/Photos/PhotosContainer";
import ContactsDisplayContainer from "./Components/Profile/ProfileInfo/Contacts/ContactsDisplayContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const ProfileContainer = React.lazy(() =>
  import("./Components/Profile/ProfileContainer")
);
const Login = React.lazy(() => import("./Components/login/login"));

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />

        <Navbar />

        <div class="app-wrapper-content">
         

          <Route
            path="/profile/:userId?"
            render={() => {
              return withSuspense(ProfileContainer);
            }}
          />

          <Route
            path="/home/:userId?"
            render={() => {
              return withSuspense(ProfileContainer);
            }}
          />

          <Route
            path="/login"
            render={() => {
              return (
                <Suspense fallback={<div>Загрузка...</div>}>
                  <Login />
                </Suspense>
              );
            }}
          />
          <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
          
          <Route path="/dialogs" render={() => <DialogsContainer />} />

          <Route path="/contact" render={() => <ContactsDisplayContainer />} />

          <Route path="/photos" render={() => <PhotosContainer />} />

          <Route path="/friends" render={() => <FriendUsersContainer />} />

          <Route path="/music" render={() => <ProfileMusicPage />} />

          <Route path="/users" render={() => <UsersContainer />} />

          <Route path="/searchforusers" render={() => <SearchForUser />} />

          <Route
            path="/userswithstatus"
            render={() => <UsersWithStatusContainer />}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const SamuraiJSApp = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};
export default SamuraiJSApp;
