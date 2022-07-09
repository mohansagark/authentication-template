import {
  SET_USER_INFO,
  GET_USER_INFO,
  RESET_USER_INFO,
  RESET_USER_GOOGLE_INFO,
} from "./types";

export const getUserInfo = () => {
  return {
    type: GET_USER_INFO,
  };
};

export const setUserInfo = (payload) => {
  return {
    type: SET_USER_INFO,
    payload,
  };
};

export const resetUserInfo = () => {
  return {
    type: RESET_USER_INFO,
  };
};

export const resetGoogleInfo = () => {
  return {
    type: RESET_USER_GOOGLE_INFO,
  };
};
