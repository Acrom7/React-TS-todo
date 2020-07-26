import renderWithProviders from "../utils/test-utils"
import TodoItem from "../components/TodoItem/TodoItem"
import React from "react"
import userEvent from "@testing-library/user-event"
import {CHANGE_TODO, DELETE_TODO, TOGGLE_TODO} from "../redux/actions/types"

describe('TodoItem component', () => {
	const testElement = {
		id: '0',
		text: 'Lorem ipsum',
		completed: false,
	}

	it('should toggle Todo on checkbox click', () => {
		const {getByRole, store} = renderWithProviders(<TodoItem {...testElement}/>)
		const checkbox = getByRole('checkbox')
		userEvent.click(checkbox)

		expect(store.dispatch).toBeCalledTimes(1)
		expect(store.dispatch).toHaveBeenCalledWith({
			type: TOGGLE_TODO,
			id: testElement.id,
		})
	})

	it('should change Todo on user typing', () => {
		const {getByRole, store} = renderWithProviders(<TodoItem {...testElement}/>)
		const textbox = getByRole('textbox')
		const newText = 'a b c'
		userEvent.type(textbox, newText)

		expect(store.dispatch).toBeCalledTimes(newText.length)
		expect(store.dispatch).toHaveBeenLastCalledWith({
			type: CHANGE_TODO,
			id: testElement.id,
			text: newText,
		})
	})

	it('should remove Todo on delete button click', () => {
		const {getByRole, store} = renderWithProviders(<TodoItem {...testElement}/>)
		const button = getByRole('button')
		userEvent.click(button)

		expect(store.dispatch).toBeCalledTimes(1)
		expect(store.dispatch).toHaveBeenLastCalledWith({
			type: DELETE_TODO,
			id: testElement.id,
		})
	})
})