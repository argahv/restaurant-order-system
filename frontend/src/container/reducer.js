import produce from "immer";
import * as types from "./types";

export const INITIAL_STATE = {
  theme: "dark",
  tokens: {
    access: { token: "" },
    refresh: {},
  },
  user: {
    name: "",
    email: "",
    role: "",
    id: "",
  },
  client: {
    client_name: "",
    client_id: 22,
  },
};

const reducer = (state = INITIAL_STATE, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case types.SET_THEME:
        draft.theme = payload;
        break;
      case types.SET_TOKEN:
        draft.tokens = payload.tokens;
        draft.user = payload.user;
        break;
      case types.GET_USER_SUCCESS:
        draft.user = payload;
        break;
      case types.GET_CLIENT_SUCCESS:
        draft.client = payload.data;
        break;
      // default:
      //   return INITIAL_STATE;
    }
    // case for token expiry
    if (type.slice(type.length - 7) === "FAILURE") {
      // failure of an api call
      // check for token expiry case in payload
      if (payload && payload["friendly-message"] === "Token Invalid") {
        draft.token = "";
        draft.user = {};
        localStorage.removeItem("token");
      }
    }
  });

export default reducer;
