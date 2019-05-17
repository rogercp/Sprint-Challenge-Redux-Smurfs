import { FETCHING_SMURFS, SMURF_SUCCESS, ADDING_SMURF, DELETING_SMURF } from "../actions/";
//one smurf in smurfs to start to wire up components and confirm mapStateToProps is workign

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };
      case SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        addingSmurf: false,
        deletingSmurf: false
      }
      case ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true
      }
      
      default: 
      return state;
  }
};

export default smurfReducer


