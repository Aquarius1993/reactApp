import React from 'react'

import {
	createStore
} from 'redux'
import {
	Provider
} from 'react-redux'
import Tapp from './containers/App'

import todoApp from './reducers'

import './index.scss'

let store = createStore(todoApp);

class Todos extends React.Component {
	render() {
		return (
			<Provider store={store}>
    			<Tapp/>
  			</Provider>
		)
	}
}

export default Todos;