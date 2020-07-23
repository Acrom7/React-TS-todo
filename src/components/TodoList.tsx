import React from 'react'
import NewItem from './NewItem/NewItem'
import {ITodoItem} from './types'
import {connect, ConnectedProps} from 'react-redux'
import DraggableTodoItem from './DraggableTodoItem'

const mapStateToProps = ({todos}: { todos: ITodoItem[] }) => ({todoList: todos})

const connector = connect(mapStateToProps)

type PropsFromRedux = ConnectedProps<typeof connector>
// Can add extra props with &
type Props = PropsFromRedux

function TodoList(props: Props) {
	return (
		<div className="uk-flex uk-flex-column uk-flex-middle uk-padding uk-child-width-1-1 uk-child-width-1-2@m">
			<NewItem/>
			{props.todoList.map((el: ITodoItem, index: number) => (
				<DraggableTodoItem
					text={el.text}
					id={el.id}
					index={index}
					key={el.id}
					completed={el.completed}
				/>
			))}
		</div>
	)
}

export default connector(TodoList)
