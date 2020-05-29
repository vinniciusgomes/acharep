/**
 * Types
 */
export const Types = {
  REQUEST_FILTERS: "filter/REQUEST_FILTERS",
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  filters: [],
};

/**
 * Actions
 */
export const Creators = {
  setFilters: (filters) => ({
    type: Types.REQUEST_FILTERS,
    filters,
  }),
};

export default function filterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST_FILTERS:
      return { ...state, filters: action.filters };
    default:
      return state;
  }
}
