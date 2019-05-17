
import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = 'FETCHING_SMURFS' 
export const SMURF_SUCCESS = 'SMURF_SUCCESS'
export const ADDING_SMURF = 'ADD_SMURF'

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/


export const getSmurfs = () => (dispatch) => {
  dispatch({type: FETCHING_SMURFS})
  axios
  .get('http://localhost:3333/smurfs')
  .then(res => (dispatch({ type: SMURF_SUCCESS, payload: res.data })))
  .catch(err=>console.log(err))
}

export const addSmurf = (newSmurf) => (dispatch) => {
  dispatch({type: ADDING_SMURF})
  axios.post('http://localhost:3333/smurfs', newSmurf)
  .then(res => (dispatch({ type: SMURF_SUCCESS, payload: res.data})))
  .catch(err => console.log(err));
 }
 
