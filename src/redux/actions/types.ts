export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

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


export type TodoActionTypes =
	| IAddTodoAction
	| IToggleTodoAction
	| IDeleteTodoAction