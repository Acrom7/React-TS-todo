import {v4 as uuid} from 'uuid'
import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from './types'
import {Action, ActionCreator} from 'redux'

export const addTodo: ActionCreator<Action> = (text: string) => ({
	type: ADD_TODO,
	id: uuid(),
	text,
})

export const deleteTodo: ActionCreator<Action> = (id: string) => ({
	type: DELETE_TODO,
	id,
})

export const toggleTodo: ActionCreator<Action> = (id: string) => ({
	type: TOGGLE_TODO,
	id,
})