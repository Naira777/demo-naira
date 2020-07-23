import React, { Component, Suspense } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navbar from './Components/Navbar/Navbar';

import {  Route, withRouter, Redirect, BrowserRouter } from "react-router-dom";
import News from './Components/News/News';

//import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer  from './Components/Users/UsersContainer';

//import Login from './Components/login/login';
//import ProfileContainer from './Components/Profile/ProfileContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloader from './Components/common/Preloader/Preloader';
import {initializeApp} from './Redux/app-reducer';
import {HashRouter} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './Redux/redux-store';
import withSuspense from './Components/Dialogs/hoc/withSuspense';

import FriendsContainer from './Components/Users/FriendsContainer';
import StatusUsersContainer from './../src/Components/Users/statusUsersContainer';
import ProfileMusicContainer from './Components/Profile/ProfileMusic/ProfileMusicContainer';
import SearchUserContainer from './Components/Users/Search/SearchUserContainer';
import PhotosContainer from './Components/Header/Photos/PhotosContainer';
import ContactsDisplayContainer from './Components/Profile/ProfileInfo/Contacts/ContactsDisplayContainer';
import Hobby from './Components/Profile/ProfileInfo/Hobby/Hobby';





const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));

const Login = React.lazy(() => import('./Components/login/login'));

class  App extends Component {

//catchAllUnhandledErrors = (promiseRejectionEvent) => {

   // alert ("Some error occured");
   // console.error (promiseRejectionEvent);
//}


    componentDidMount () {

        this.props.initializeApp();
        //window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    
    }

    //Ete invh vor tex kanch el enq addEventListener, apa petq e naev ayn anpayman
    //remove anenq` removeEventListener: Da kareli e anel componenentWillUnmount-i mej

   // componentWillUnmount () {

      // window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);


   // }
    
   
   render () {

    if (!this.props.initialized){

        return <Preloader />
    }


    return (
        
        <div className='app-wrapper' >
          
        <HeaderContainer />

        <Navbar />
       <div class ='app-wrapper-content'>
        
        <Route path='/dialogs'
        render={  () => {
           return  <Suspense fallback={<div>Загрузка...</div>}>
            <DialogsContainer />
          </Suspense>
        }
       } />
       
       <Route  exact path='/'
      render={  () =>  <Redirect to={"/profile"}  />} />

        <Route path='/profile/:userId?'
         render={  () => 
            {
                return  withSuspense (ProfileContainer);
             }
         //suspens nshanakum e vor henc gnumenq profil nor sksuma zagruzka anel
         
         } />


     <Route path='/home/:userId?'
         render={  () => 
            {
                return  withSuspense (ProfileContainer);
             }
         //suspens nshanakum e vor henc gnumenq profil nor sksuma zagruzka anel
         
         } />


      

          <Route path='/contact'
         render={  () =>  <ContactsDisplayContainer />} />

            <Route path='/hobby'
         render={  () =>  <Hobby />} />
         
        <Route path='/photos'
         render={  () =>  <PhotosContainer />} />
        
        <Route path='/friends'
         render={  () =>  <FriendsContainer />} />
         
          <Route path='/userswithstatus'
         render={  () =>  <StatusUsersContainer />} />

        <Route path='/music'
         render={  () =>  <ProfileMusicContainer />} /> 

        <Route path='/users'
         render={  () =>  <UsersContainer />} />
        
        <Route path='/searchusers'
         render={  () =>  <SearchUserContainer />} />

     
         
        <Route path='/login'
         render={  () => 
            {
                return  <Suspense fallback={<div>Загрузка...</div>}>
                  <Login  />
               </Suspense>
             }
         
        } />



    </div>


        </div> 
)
    }
}

const mapStateToProps = (state) => ({

initialized: state.app.initialized

})
                                          
let AppContainer = compose( 
     withRouter,
     connect (mapStateToProps, {initializeApp})) (App);



const SamuraiJSApp = (props) => {


    //irakan kyanqum ogtagorcum enq BrowserRouter
    //basename grum enq vor githab pagum el normal ashxati mer cragir@,aysinqn tarber env-i hamar


return    <HashRouter basename = {process.env.PUBLIC_URL}> 
    
    
    <Provider store= {store}>
       
        <AppContainer  />
 
   </Provider>

 </HashRouter> 
 
}
export default SamuraiJSApp;