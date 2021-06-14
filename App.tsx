import React, { Component } from 'react'
import SwitchNavigator from './navigation/LoginNavigator'
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from './reducers/index'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

const middleware = applyMiddleware(thunkMiddleware)

const store = createStore(rootReducer, middleware)

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<SwitchNavigator />
			</Provider>
		)
	}
}
