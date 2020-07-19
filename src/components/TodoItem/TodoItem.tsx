import React, {useState} from 'react'
import './todoitem.sass'
import {ITodoItem} from '../types'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {deleteTodo, toggleTodo} from '../../redux/actions'

interface ITodoItemProps extends ITodoItem {
	deleteTodo: (id: string) => void,
	toggleTodo: (id: string) => void,
}

function TodoItem({text, completed, deleteTodo, toggleTodo, id}: ITodoItemProps) {
	let [inputText, setInputText] = useState<string>(text)

	const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setInputText(event.target.value)
	}

	return (
		<div className="uk-card uk-card-default uk-card-hover uk-flex" style={{backgroundColor: 'white'}}>
			<div className="uk-flex uk-flex-middle">
				<input type="checkbox"
					   defaultChecked={completed}
					   className="uk-checkbox"
					   onClick={() => toggleTodo(id)}
				/>
			</div>
			<div className="uk-card-body">
				<input type="text"
					   className="uk-input uk-form-blank"
					   value={inputText}
					   onChange={onChange}
				/>
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
		toggleTodo: (id: string) => dispatch(toggleTodo(id)),
	}
}

export default connect(null, mapDispatchToProps)(TodoItem)