/*
  Be sure to import in all of the action types from `../actions`
*/

import {FETCHING_SMURFS, SMURF_SUCCESS} from "../actions"
//  Your initial/default state for this project could *Although does not have to* look a lot like this

const initialState={
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
}
 


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/


const rootReducer=(state=initialState, action)=>{
    switch (action.type){
      case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs:true
      }
      case SMURF_SUCCESS:
      return{
        ...state,
        smurfs:action.payload,
        fetchingSmurfs:false,
        addingSmurf:false,
        deletingSmurf:false,
      }
      default:
      return state;
    }






  }


export default rootReducer;


