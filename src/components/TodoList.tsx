import React from 'react'
import TodoItem from './TodoItem/TodoItem'
import NewItem from './NewItem/NewItem'
import {ITodoItem} from './types'
import {connect, ConnectedProps} from 'react-redux'
import {Droppable} from 'react-beautiful-dnd'

const mapStateToProps = ({todos}: { todos: ITodoItem[] }) => ({todoList: todos})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>
// Can add extra props with &
type Props = PropsFromRedux

function TodoList(props: Props) {
	return (
		<div className="uk-flex uk-flex-column uk-flex-middle uk-padding uk-child-width-1-1 uk-child-width-1-2@m">
			<NewItem/>
			<Droppable droppableId={'root'}>
				{provided => (
					<div {...provided.droppableProps}
						 ref={provided.innerRef}
					>
						{props.todoList.map((el: ITodoItem, index: number) => (
							<TodoItem text={el.text}
									  id={el.id}
									  index={index}
									  key={el.id}
									  completed={el.completed}
							/>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</div>
	)
}

export default connector(TodoList)
