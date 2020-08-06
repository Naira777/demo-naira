import { usersAPI, profileAPI } from "../.vs/src/api/api";
import { stopSubmit } from "redux-form";
import { initialStateForProfile } from "./InitialStates";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_PROFILE_SUCCESS = "SAVE_PHOTO_SUCCESS";
const SAVE_PHOTO_SUCCESS1 = "SAVE_PHOTO_SUCCESS1";
const SAVE_PHOTO_SUCCESS2 = "SAVE_PHOTO_SUCCESS2";
const SAVE_PHOTO_SUCCESS3 = "SAVE_PHOTO_SUCCESS3";


const profileReducer = (state = initialStateForProfile, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };

      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
    
      return stateCopy;
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case SAVE_PHOTO_SUCCESS1: {
      return {
        ...state,

        photo1: action.photo1,
      };
    }
    case SAVE_PHOTO_SUCCESS2: {
      return { ...state, photo2: action.photo2 };
    }
    case SAVE_PHOTO_SUCCESS3: {
      return { ...state, photo3: action.photo3 };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    case SAVE_PHOTO_PROFILE_SUCCESS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => {
  return { type: ADD_POST, newPostText };
};

export const setUserProfile = (profile) => {
  return { type: SET_USER_PROFILE, profile };
};
export const setStatus = (status) => {
  return { type: SET_STATUS, status };
};

export const saveProfilePhotoSuccess = (photos) => {
  return { type: SAVE_PHOTO_PROFILE_SUCCESS, photos };
};

export const savePhotoSuccess1 = (file1) => {
  return { type: SAVE_PHOTO_SUCCESS1, photo1: file1 };
};

export const savePhotoSuccess2 = (file2) => {
  return { type: SAVE_PHOTO_SUCCESS2, photo2: file2 };
};
export const savePhotoSuccess3 = (file3) => {
  return { type: SAVE_PHOTO_SUCCESS3, photo3: file3 };
};
export const getUserProfile = (userId) => async (dispatch) => {
  const data = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
  const data = await profileAPI.getStatus(userId);
  dispatch(setStatus(data));
};

export const updateStatus = (status) => async (dispatch) => {
  const data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  const data = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(saveProfilePhotoSuccess(data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const data = await profileAPI.saveProfile(profile);

  if (data.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit("edit-profile", { _error: data.data.messages[0] }));
    return Promise.reject(data.data.messages[0]);
  }
};

export default profileReducer;
