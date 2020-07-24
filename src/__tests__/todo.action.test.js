import {addTodo, changeTodo, deleteTodo, toggleTodo, updateTodoList} from "../redux/actions"
import {ADD_TODO, CHANGE_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODOLIST} from "../redux/actions/types"

describe('Todo actions', () => {
	it('should create an action to add a todo', () => {
		const text = 'Example text 1'
		const expectedAction = {
			id: expect.any(String),
			type: ADD_TODO,
			text,
		}
		expect(addTodo(text)).toEqual(expectedAction)
	})

	it('should create an action to delete a todo', () => {
		const id = '1'
		const expectedAction = {
			id,
			type: DELETE_TODO,
		}
		expect(deleteTodo(id)).toEqual(expectedAction)
	})

	it('should create an action to change a todo', () => {
		const id = '2'
		const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
		const expectedAction = {
			id,
			text,
			type: CHANGE_TODO,
		}
		expect(changeTodo(id, text)).toEqual(expectedAction)
	})

	it('should create an action to toggle a todo', () => {
		const id = '3'
		const expectedAction = {
			id,
			type: TOGGLE_TODO,
		}
		expect(toggleTodo(id)).toEqual(expectedAction)
	})

	it('should create an action to update a todo list', () => {
		const todoList = []
		const expectedAction = {
			newTodoList: todoList,
			type: UPDATE_TODOLIST,
		}
		expect(updateTodoList(todoList)).toEqual(expectedAction)
	})
})