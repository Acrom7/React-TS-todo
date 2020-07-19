export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

interface AddTodoAction {
	type: typeof ADD_TODO,
	id: string,
	text: string,
}

interface ToggleTodoAction {
	type: typeof TOGGLE_TODO,
	id: string,
}

interface DeleteTodoAction {
	type: typeof DELETE_TODO,
	id: string
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction | DeleteTodoAction