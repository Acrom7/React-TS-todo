import {v4 as uuid} from 'uuid'
import {ADD_TODO, DELETE_TODO, TodoActionTypes, TOGGLE_TODO} from './types'

export const addTodo = (text: string): TodoActionTypes => ({
	type: ADD_TODO,
	id: uuid(),
	text,
})

export const deleteTodo = (id: string): TodoActionTypes => ({
	type: DELETE_TODO,
	id,
})

export const toggleTodo = (id: string): TodoActionTypes => ({
	type: TOGGLE_TODO,
	id,
})