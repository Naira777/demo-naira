import { usersAPI } from "../.vs/src/api/api";
import { updateObjectInArray } from "../.vs/src/utils/object-helpers";
import { initialStateForUsers } from "./InitialStates";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";
const SET_FOLLOWED_USERS_COUNT = "SET_FOLLOWED_USERS_COUNT";
const SET_FOLLOWED_USERS = "SET_FOLLOWED_USERS";
const SET_USERS_WITH_STATUS = "SET_TOTAL_USERS_WITH_STATUS";
const SET_USERS_COUNT_WITH_STATUS = "SET_TOTAL_USERS_COUNT_WITH_STATUS";
const SET_SEARCH_USERS = "SET_SEARCH_USERS";



const usersReducer = (state = initialStateForUsers, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };

    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }

    case SET_USERS_WITH_STATUS: {
      return {
        ...state,
        usersWithStatus: action.users.filter((u) => (u.status != null)),
      };
    }

    case SET_FOLLOWED_USERS: {
      return {
        ...state,
        followedUsers: action.users,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }

    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.count,
      };
    }

    case SET_FOLLOWED_USERS_COUNT: {
      return {
        ...state,
        followedUsersCount: action.count,
      };
    }

    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id != action.userId),
      };
    }

    case SET_SEARCH_USERS: {
      return {
        ...state,
        searchedUsers: action.users,
      };
    }

    default:
      return state;
  }
};

export const followSuccess = (userId) => {
  return { type: FOLLOW, userId };
};

export const unfollowSuccess = (userId) => {
  return { type: UNFOLLOW, userId };
};
export const setUsers = (users) => {
  return { type: SET_USERS, users };
};

export const setFollowedUsers = (users) => {
  return { type: SET_FOLLOWED_USERS, users };
};

export const setUsersWithStatus = (users) => {
  return { type: SET_USERS_WITH_STATUS, users };
};

export const setSearchedUsers = (users) => {
  return { type: SET_SEARCH_USERS, users };
};

export const setCurrentPage = (currentPage) => {
  return { type: SET_CURRENT_PAGE, currentPage };
};

export const setTotalUsersCount = (totalUsersCount) => {
  return { type: SET_TOTAL_USERS_COUNT, count: totalUsersCount };
};

export const setUsersCountWithStatus = (users) => {
  return { type: SET_USERS_COUNT_WITH_STATUS, users };
};

export const setFollowedUsersCount = (followedUsersCount) => {
  return { type: SET_FOLLOWED_USERS_COUNT, count: followedUsersCount };
};

export const toggleIsFetching = (isFetching) => {
  return { type: TOGGLE_IS_FETCHING, isFetching };
};
export const toggleFollowingProgress = (isFetching, userId) => {
  return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId };
};

export const requestUsers = (Page, pageSize) => async (dispatch) => {
  dispatch(setCurrentPage(Page));
  dispatch(toggleIsFetching(true));
  const data = await usersAPI.getUsers(Page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
};

export const requestUsersbyName = (userName) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const data = await usersAPI.getUsersbyName(userName);
  dispatch(toggleIsFetching(false));
  dispatch(setSearchedUsers(data.items));
};

export const requestFollowedUsers = (Page, pageSize) => async (dispatch) => {
  dispatch(setCurrentPage(Page));
  dispatch(toggleIsFetching(true));
  const data = await usersAPI.getfollowedUsers(Page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(setFollowedUsers(data.items));
  dispatch(setFollowedUsersCount(data.totalCount));
};

export const requestUsersWithStatus = (Page, pageSizeForStatus) => async (
  dispatch
) => {
  dispatch(setCurrentPage(Page));
  const data = await usersAPI.getUsers(Page, pageSizeForStatus);
  dispatch(setUsersWithStatus(data.items));
  dispatch(setUsersCountWithStatus(data.items));
};

export const follow = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));

    const data = await usersAPI.follow(userId);
    if (data.resultCode === 0) {
      dispatch(followSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  };
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));

    const data = await usersAPI.unfollow(userId);
    if (data.resultCode === 0) {
      dispatch(unfollowSuccess(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  };
};

export default usersReducer;
