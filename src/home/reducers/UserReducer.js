
const INITIAL_STATE = {
  viewType: 'PROGRESS',
  users: []
};

export default (state = INITIAL_STATE, action) => {
  let newState = state;
  switch(action.type) {
    case "FETCH_USERS":
      newState = {
        ...state,
        viewType: 'PROGRESS'
      };
      break;
    case 'FETCH_USERS_SUCCESS':
      newState = {
        ...state,
        viewType: 'MAIN_VIEW',
        users: action.payload
      };
      break;
    default:
      newState = state;
  }

  return newState;
}