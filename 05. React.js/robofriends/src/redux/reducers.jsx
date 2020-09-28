import { CHANGE_SEARCH_FIELD } from "./constants";

const initialState = {
  searchField: "",
};

// ? Without logging shit to the console
export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};

// export const searchRobots = (state = initialState, action = {}) => {
//   console.log(action.type);
//   switch (action.type) {
//     case CHANGE_SEARCH_FIELD:
//       return Object.assign({}, state, { searchField: action.payload });
//     default:
//       return state;
//   }
// };
