import {ADD_TODO, CHANGE_TODO, DELETE_TODO, TodoActionTypes, TOGGLE_TODO} from '../actions/types'
import {ITodoItem} from '../../components/types'

const initialState: ITodoItem[] = []

const todos = (state = initialState, action: TodoActionTypes) => {
	switch (action.type) {
		case ADD_TODO:
			const newTodoItem: ITodoItem = {
				id: action.id,
				text: action.text,
				completed: false,
			}
			return [newTodoItem, ...state]
		case TOGGLE_TODO:
			return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
		case DELETE_TODO:
			return state.filter(todo => todo.id !== action.id)
		case CHANGE_TODO:
			return state.map(todo => todo.id === action.id ? {...todo, text: action.text} : todo)
		default:
			return state
	}
}

export default todos