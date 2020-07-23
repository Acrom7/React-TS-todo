import React, {useEffect, useState} from 'react'
import './todoitem.sass'
import {ITodoItem} from '../types'
import {connect} from 'react-redux'
import {Dispatch} from 'redux'
import {changeTodo, deleteTodo, toggleTodo} from '../../redux/actions'
import TextareaAutosize from 'react-textarea-autosize'

interface ITodoItemProps extends ITodoItem {
	deleteTodo: (id: string) => void,
	toggleTodo: (id: string) => void,
	changeTodo: (id: string, text: string) => void,
}

function TodoItem({text, completed, deleteTodo, toggleTodo, changeTodo, id}: ITodoItemProps) {
	let [inputText, setInputText] = useState<string>(text)

	useEffect(() => {
		changeTodo(id, inputText)
	}, [changeTodo, id, inputText])

	const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
		setInputText(event.target.value)
	}

	return (
		<div className="uk-card uk-card-default uk-card-hover uk-flex todoItem">
			<div className="uk-flex uk-width-1-1">
				<div className="uk-flex uk-flex-middle">
					<input type="checkbox"
						   defaultChecked={completed}
						   className="uk-checkbox"
						   onClick={() => toggleTodo(id)}
					/>
				</div>
				<div className="uk-card-body uk-width-1-1">
					<TextareaAutosize className="uk-textarea uk-form-blank todoItem-text"
									  value={inputText}
									  onChange={onChange}
					/>
				</div>
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
		changeTodo: (id: string, text: string) => dispatch(changeTodo(id, text)),
	}
}

export default connect(null, mapDispatchToProps)(TodoItem)