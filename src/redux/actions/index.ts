import {v4 as uuid} from 'uuid'
import {
	ADD_TODO,
	CHANGE_TODO,
	DELETE_TODO,
	IAddTodoAction,
	IChangeTodoAction,
	IDeleteTodoAction,
	IToggleTodoAction,
	IUpdateTodoListAction,
	TOGGLE_TODO,
	UPDATE_TODOLIST,
} from './types'
import {ITodoItem} from '../../components/types'

export const addTodo = (text: string): IAddTodoAction => ({
	type: ADD_TODO,
	id: uuid(),
	text,
})

export const changeTodo = (id: string, text: string): IChangeTodoAction => ({
	type: CHANGE_TODO,
	id,
	text,
})

export const deleteTodo = (id: string): IDeleteTodoAction => ({
	type: DELETE_TODO,
	id,
})

export const toggleTodo = (id: string): IToggleTodoAction => ({
	type: TOGGLE_TODO,
	id,
})

export const updateTodoList = (newTodoList: ITodoItem[]): IUpdateTodoListAction => ({
	type: UPDATE_TODOLIST,
	newTodoList,
})