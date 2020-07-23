import React from 'react'
import {Droppable} from 'react-beautiful-dnd'
import TodoList from './TodoList'

function DroppableTodoList() {
	return (
		<Droppable droppableId={'root'}>
			{provided => (
				<div
					{...provided.droppableProps}
					ref={provided.innerRef}
				>
					<TodoList/>
					{provided.placeholder}
				</div>
			)}
		</Droppable>
	)
}

export default DroppableTodoList