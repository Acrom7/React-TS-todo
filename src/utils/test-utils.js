import {createStore} from "redux"
import rootReducer from "../redux/reducers"
import {render} from "@testing-library/react"
import {Provider} from "react-redux"
import React from "react"

export default function renderWithProviders(ui, {reduxState} = {}) {
	const store = createStore(rootReducer, reduxState)
	store.dispatch = jest.fn()
	return {
		...render(
			<Provider store={store}>
				{ui}
			</Provider>,
		),
		store,
	}
}