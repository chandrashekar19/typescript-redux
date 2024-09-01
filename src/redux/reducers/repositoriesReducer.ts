import { Action } from "../actions";
import { ActionType } from "../actionTypes";

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (
  state: RepositoriesState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      // 100% certain that 'action' is SearchRepository action.
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;

// Example underhood

// if (action.type === "search_repositories_success") {
//     // 100% certainity that 'action' satisfies the
//     // SearchRepositoriesSuccessAction interface
//     // action.payload
//   }
