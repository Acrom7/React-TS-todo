import React from 'react'
import {DragDropContext, DropResult} from 'react-beautiful-dnd'
import {connect} from 'react-redux'
import './app.sass'
import {ITodoItem} from './components/types'
import {Dispatch} from 'redux'
import {updateTodoList} from './redux/actions'
import DroppableTodoList from './components/DroppableTodoList'

interface AppProps {
	todoList: ITodoItem[],
	updateTodoList: (newTodoList: ITodoItem[]) => void,
}

function App({todoList, updateTodoList}: AppProps) {
	const onDragEnd = (props: DropResult) => {
		const {source, destination} = props

		// Drop outside
		if (destination === null) {
			return
		}

		// Drop to the same place
		if (destination?.droppableId === source.droppableId && destination.index === source.index) {
			return
		}

		let newTodoList = [...todoList]
		const removed = newTodoList.splice(source.index, 1)[0]
		newTodoList.splice(destination?.index as number, 0, removed)
		updateTodoList(newTodoList)
	}

	return (
		<div className="app">
			<div className="uk-container">
				<DragDropContext onDragEnd={onDragEnd}>
					<DroppableTodoList/>
				</DragDropContext>
			</div>
		</div>
	)
}

const mapStateToProps = ({todos}: { todos: ITodoItem[] }) => ({todoList: todos})

const mapDispatchToProps = (dispatch: Dispatch) => ({
	updateTodoList: (newTodoList: ITodoItem[]) => dispatch(updateTodoList(newTodoList)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
