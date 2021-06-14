import { combineReducers } from 'redux'

const user = (state = {}, action) => {
	switch (action.type) {
		case 'UPDATE_EMAIL':
			return { ...state, email: action.payload }
		case 'UPDATE_PASSWORD':
			return { ...state, password: action.payload }
		default:
			return state
	}
}

export const rootReducer = combineReducers({
	user,
})
