import React from 'react'
import NewItem from "../components/NewItem/NewItem"
import {fireEvent} from '@testing-library/react'
import {ADD_TODO} from "../redux/actions/types"
import renderWithProviders from "../utils/test-utils"

describe('NewItem component', () => {
	it('should not dispatch an action on button click with empty input', () => {
		const {getByRole, store} = renderWithProviders(<NewItem/>)
		fireEvent.click(getByRole('button'))

		expect(store.dispatch).toHaveBeenCalledTimes(0)
	})

	it('should dispatch an create action on button click', () => {
		const {getByRole, store} = renderWithProviders(<NewItem/>)
		const text = 'Example text'

		fireEvent.change(getByRole('textbox'), {target: {value: text}})
		fireEvent.click(getByRole('button'))

		expect(store.dispatch).toHaveBeenCalledTimes(1)
		expect(store.dispatch).toHaveBeenCalledWith({
			id: expect.any(String),
			type: ADD_TODO,
			text,
		})
	})

	it('should dispatch an create action on keyboard Enter click', () => {
		const {getByRole, store} = renderWithProviders(<NewItem/>)
		const text = 'Example text'

		const input = getByRole('textbox')
		fireEvent.change(input, {target: {value: text}})
		fireEvent.keyDown(input, {key: "Enter"})

		expect(store.dispatch).toHaveBeenCalledTimes(1)
		expect(store.dispatch).toHaveBeenCalledWith({
			id: expect.any(String),
			type: ADD_TODO,
			text,
		})
	})
})