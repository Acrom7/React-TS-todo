import React from 'react'
import {Draggable} from 'react-beautiful-dnd'
import {ITodoItem} from './types'
import TodoItem from './TodoItem/TodoItem'

interface DraggableTodoItemProps extends ITodoItem {
	id: string,
	index: number,
}

function DraggableTodoItem(props: DraggableTodoItemProps) {
	return (
		<Draggable draggableId={props.id} index={props.index}>
			{provided => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					{...provided.dragHandleProps}
				>
					<TodoItem
						text={props.text}
						id={props.id}
						key={props.id}
						completed={props.completed}
					/>
				</div>
			)}
		</Draggable>

	)
}

export default DraggableTodoItem