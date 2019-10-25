import axios from 'axios';

export const FETCH_SMURFS = 'FETCH_SMURFS';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_ERROR = 'FETCH_SMURFS_ERROR';
export const ADD_SMURF = 'ADD_SMURF';
export const REMOVE_SMURF = 'REMOVE_SMURF';


export function getSmurfs(){
	return (dispatch) => {
		dispatch({type: FETCH_SMURFS})

		axios.get('http://localhost:3333/smurfs')
			.then((res)=>{
				console.log(res)
				dispatch({type: FETCH_SMURFS_SUCCESS, payload: res})
			})
			.catch((err)=> {
				dispatch({type: FETCH_SMURFS_ERROR, payload: err})
			})

	}
}