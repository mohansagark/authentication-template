import {
  SET_USER_INFO,
  GET_USER_INFO,
  RESET_USER_INFO,
  RESET_USER_GOOGLE_INFO,
} from "./types";
import {
  auth,
  gitHubProvider,
  googleAuthProvider,
  metaProvider,
} from "../../config/firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { loginErrors } from "../errors/loginErrors";
import { startSpinner, stopSpinner } from "./general.actions";

export const getUserInfo = () => {
  return {
    type: GET_USER_INFO,
  };
};

export const userEmailLogin =
  (email, password, onSuccess, onError) => async (dispatch) => {
    dispatch(startSpinner);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user?.emailVerified) {
          dispatch(setUserInfo(user));
          onSuccess();
          dispatch(stopSpinner);
        } else {
          onError("Please verify your email address and try again.");
          dispatch(stopSpinner);
        }
      })
      .catch((error) => {
        let errorMessage = loginErrors(error) ?? "";
        onError(errorMessage);
        dispatch(stopSpinner);
      });
  };

export const googleLogin = (onSuccess, onError) => async (dispatch) => {
  dispatch(startSpinner);
  signInWithPopup(auth, googleAuthProvider)
    .then((result) => {
      let credential = GoogleAuthProvider.credentialFromResult(result);
      let token = credential.accessToken;
      let user = result.user;
      dispatch(stopSpinner);
      dispatch(setUserInfo({ ...user, token }));
      onSuccess();
    })
    .catch((error) => {
      let errorMessage = error.message;
      errorMessage = loginErrors(error) ?? "";
      onError(errorMessage);
      dispatch(stopSpinner);
    });
};

export const gitHubLogin = (onSuccess, onError) => async (dispatch) => {
  dispatch(startSpinner);
  signInWithPopup(auth, gitHubProvider)
    .then((result) => {
      let credential = GithubAuthProvider.credentialFromResult(result);
      let token = credential.accessToken;
      let user = result.user;
      dispatch(stopSpinner);
      dispatch(setUserInfo({ ...user, token }));
      onSuccess();
    })
    .catch((error) => {
      let errorMessage = error.message;
      errorMessage = loginErrors(error) ?? "";
      onError(errorMessage);
      dispatch(stopSpinner);
    });
};

export const metaLogin = (onSuccess, onError) => async (dispatch) => {
  dispatch(startSpinner);
  signInWithPopup(auth, metaProvider)
    .then((result) => {
      let credential = FacebookAuthProvider.credentialFromResult(result);
      let token = credential.accessToken;
      let user = result.user;
      dispatch(stopSpinner);
      dispatch(setUserInfo({ ...user, token }));
      onSuccess();
    })
    .catch((error) => {
      let errorMessage = error.message;
      errorMessage = loginErrors(error) ?? "";
      onError(errorMessage);
      dispatch(stopSpinner);
    });
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
