import { FETCH_SMURFS, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_ERROR, ADD_SMURF, REMOVE_SMURF} from '../actions/smurfs';

const initialState = {
	smurfs: [],
	isLoading: false,
	error: null
}

export function reducer(state=initialState, action){
	let updatedSmurfs =[]
	switch(action.type){
		case FETCH_SMURFS:
			return{
				...state,
				isLoading: true
			}
		case FETCH_SMURFS_SUCCESS:
			return{
				...state,
				smurfs: [...state.smurfs, ...action.payload],
				isLoading: false
			}
		case FETCH_SMURFS_ERROR:
			return{
				...state,
				error: action.payload,
				isLoading: false
			}
		case ADD_SMURF:
			return{
				...state,
				smurfs: [...state.smurfs, ...action.payload]
			}
		case REMOVE_SMURF:
			updatedSmurfs = [state.smurfs.filter(smurf => smurf.id !== action.payload.id)]
			return{
				...state,
				newSmurfs: updatedSmurfs,
			}
		default:
			return state
	}
}