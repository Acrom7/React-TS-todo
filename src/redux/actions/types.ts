import {ITodoItem} from '../../components/types'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const CHANGE_TODO = 'CHANGE_TODO'
export const UPDATE_TODOLIST = 'UPDATE_TODOLIST'

export interface IAddTodoAction {
	type: typeof ADD_TODO,
	id: string,
	text: string,
}

export interface IToggleTodoAction {
	type: typeof TOGGLE_TODO,
	id: string,
}

export interface IDeleteTodoAction {
	type: typeof DELETE_TODO,
	id: string
}

export interface IChangeTodoAction {
	type: typeof CHANGE_TODO,
	id: string,
	text: string,
}

export interface IUpdateTodoListAction {
	type: typeof UPDATE_TODOLIST,
	newTodoList: ITodoItem[],
}

export type TodoActionTypes =
	| IAddTodoAction
	| IToggleTodoAction
	| IDeleteTodoAction
	| IChangeTodoAction
	| IUpdateTodoListAction