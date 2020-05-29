import { createStore } from "redux";

const INITIAL_STATE = {
  filters: {},
  repInfo: {},
};

function filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_FILTERS":
      return { ...state, filters: action.filters };
      break;
    case "REP_INFO": 
      return {...state, repInfo: action.repInfo}
      break;ƒ
    default:
      return state;
  }
}

const store = createStore(filters);

export default store;
