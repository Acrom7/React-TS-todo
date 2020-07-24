import todos from "../redux/reducers/todos"
import {addTodo, changeTodo, deleteTodo, toggleTodo, updateTodoList} from "../redux/actions"

describe('Todo reduce', () => {
	const id1 = '0', text1 = 'Example text 1'
	const id2 = '1', text2 = 'Example text 2'
	const notExistId = '999'

	it('should return the initial state', () => {
		expect(todos([], {})).toEqual([])
	})

	it('should handle add todo', () => {
		expect(todos([], addTodo(text1))).toEqual([
			{
				id: expect.any(String),
				text: text1,
				completed: false,
			},
		])

		const initialState = [
			{
				id: id1,
				text: text1,
				completed: false,
			},
		]
		expect(todos(initialState, addTodo(text1))).toEqual([
			{
				id: expect.any(String),
				text: text1,
				completed: false,
			},
			...initialState,
		])
	})

	it('should handle toggle todo', () => {
		const initialState = [
			{
				id: id1,
				text: text1,
				completed: false,
			},
		]
		expect(todos(initialState, toggleTodo(id1))).toEqual([
			{
				id: id1,
				text: text1,
				completed: true,
			},
		])

		// Doesn't exist TodoItem toggling
		expect(todos(initialState, toggleTodo(notExistId))).toEqual(initialState)

		const initialState2 = [
			{
				id: id1,
				text: text1,
				completed: true,
			},
		]
		expect(todos(initialState2, toggleTodo(id1))).toEqual([
			{
				id: id1,
				text: text1,
				completed: false,
			},
		])
	})

	it('should handle delete todo', () => {
		const initialState = [
			{
				id: id1,
				text: text1,
				completed: false,
			},
			{
				id: id2,
				text: text2,
				completed: false,
			},
		]

		// Trying to remove TodoItem that doesn't exist
		expect(todos(initialState, deleteTodo(notExistId))).toEqual(initialState)

		const firstDeleteState = todos(initialState, deleteTodo(id1))
		expect(firstDeleteState).toEqual([
			{
				id: id2,
				text: text2,
				completed: false,
			},
		])

		const secondDeleteState = todos(firstDeleteState, deleteTodo(id2))
		expect(secondDeleteState).toEqual([])
	})

	it('should handle change todo', () => {
		const initialState = [
			{
				id: id1,
				text: text1,
				completed: false,
			},
		]
		expect(todos(initialState, changeTodo(id1, text2))).toEqual([
			{
				id: id1,
				text: text2,
				completed: false,
			},
		])

		expect(todos(initialState, changeTodo(notExistId, text2))).toEqual(initialState)
	})

	it('should handle update todo list', () => {
		const newTodoList = [
			{
				id: id1,
				text: text1,
				completed: false,
			},
		]
		expect(todos([], updateTodoList(newTodoList))).toEqual(newTodoList)
	})
})