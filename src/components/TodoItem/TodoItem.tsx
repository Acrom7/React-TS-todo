import React from 'react'
import './todoitem.sass'
import {Colors, ITodoItem} from '../types'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {deleteTodo} from '../../redux/actions'
import {TodoActionTypes} from '../../redux/actions/types'

interface ITodoItemProps extends ITodoItem {
	deleteTodo: TodoActionTypes
}

function TodoItem({text, completed, deleteTodo, color = Colors.Reef, id}: ITodoItemProps) {
	return (
		<div className="uk-card uk-card-default uk-card-hover uk-flex" style={{backgroundColor: 'white'}}>
			<div className="uk-flex uk-flex-middle">
				<input type="checkbox"
					   defaultChecked={completed}
					   className="uk-checkbox"
				/>
			</div>
			<div className="uk-card-body">
				<p>{text}</p>
			</div>
			<div className="todoItem-button">
				<button className="uk-button uk-button-danger" onClick={() => deleteTodo(id)}>Удалить</button>
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		deleteTodo: (id: string) => dispatch(deleteTodo(id)),
	}
}

export default connect(null, mapDispatchToProps)(TodoItem)