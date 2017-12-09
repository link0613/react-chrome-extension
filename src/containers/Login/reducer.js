import * as types from "./constants";

const initialState = {
	login: null,
};

export default function saveLoginReducer(state = initialState, action) {

    switch (action.type) {
      case types.SAVE_LOGIN:
      console.log(action.login);
      const newState = {
      	login: action.login,
      };
      return newState;

      default:
    	return state;

    }
  }