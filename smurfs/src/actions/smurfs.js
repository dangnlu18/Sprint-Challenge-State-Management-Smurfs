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
				dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
			})
			.catch((err)=> {
				dispatch({type: FETCH_SMURFS_ERROR, payload: err})
			})

	}
}




export function addSmurf(item){
	return (dispatch)=>{
		dispatch({type: FETCH_SMURFS })

		axios.post('http://localhost:3333/smurfs', item)
			.then((res)=>{
				console.log(res)
				dispatch({type:ADD_SMURF, payload: res.data})
			})
			.catch((err)=>{
				dispatch({type: FETCH_SMURFS_ERROR, payload: err.response.data})
			})


	}
}

export function removeSmurf(item){
	return{
		type: REMOVE_SMURF,
		payload: item
	}
}