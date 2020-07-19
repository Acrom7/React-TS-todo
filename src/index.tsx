import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './redux/reducers'
import {load, save} from 'redux-localstorage-simple'
import './site.sass'
import 'uikit/dist/js/uikit.min'

const createStoreWithMiddleware = applyMiddleware(save())(createStore)
const store = createStoreWithMiddleware(rootReducer, load())

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
)

serviceWorker.unregister()
