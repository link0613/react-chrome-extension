import * as types from "./constants";

export function saveLogin(login) {
  return {
    type: types.SAVE_LOGIN,
    login,
  };
}