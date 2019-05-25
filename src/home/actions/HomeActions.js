
import { NetworkHandler } from "../../../util/NetworkHandler";
import { USERS } from "../../../util/NetworkConstants";

export const fetchUsers = () => {
  return dispatch => {
    dispatch({
      type: "FETCH_USERS"
    });
    NetworkHandler.get(`${USERS}`)
    .then((response) => {
      dispatch({
        type: "FETCH_USERS_SUCCESS",
        payload: response.data
      });
    })
    .catch((error) => {
      dispatch({
        type: "FETCH_USERS_FAIL",
        payload: error
      });
    });
  };
}