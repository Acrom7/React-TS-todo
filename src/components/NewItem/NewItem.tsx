import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../../redux/actions'
import {Dispatch} from 'redux'

interface NewItemProps {
	addTodo: (text: string) => void
}

function NewItem({addTodo}: NewItemProps) {
	let [text, setText] = useState<string>('')

	const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		setText(event.target.value)
	}

	const handleSubmit = (): void => {
		if (text.trim() === '') return
		addTodo(text)
		setText('')
	}

	const handleEnterClick = (event: React.KeyboardEvent): void => {
		if (event.key === 'Enter') {
			handleSubmit()
		}
	}

	return (
		<div className="uk-flex newItem uk-margin-bottom">
			<input type="text"
				   className="uk-input"
				   onChange={onChange}
				   value={text}
				   onKeyPress={handleEnterClick}
			/>
			<button onClick={handleSubmit}
					className="uk-button uk-button-primary"
			>
				Добавить
			</button>
		</div>
	)
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		addTodo: (text: string) => dispatch(addTodo(text)),
	}
}

export default connect(null, mapDispatchToProps)(NewItem)