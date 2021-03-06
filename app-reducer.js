import { getAuthUserData } from "./auth-reducer";
import { initialStateForApp } from "./InitialStates";
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

const appReducer = (state = initialStateForApp, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => async (dispatch) => {
    await dispatch(getAuthUserData());
    dispatch(initializedSuccess());
  
};

export default appReducer;
