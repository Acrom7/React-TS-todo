import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../../redux/actions'
import {Dispatch} from 'redux'
import './newitem.sass'

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
		<div className="uk-grid newItem uk-margin-bottom uk-grid-collapse uk-flex-middle" data-uk-grid="">
			<input type="text"
				   className="uk-input uk-width-expand"
				   onChange={onChange}
				   value={text}
				   onKeyDown={handleEnterClick}
			/>
			<div className="newItem-buttonWrapper">
				<button onClick={handleSubmit}
						className="uk-button uk-button-primary"
				>
					Добавить
				</button>
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		addTodo: (text: string) => dispatch(addTodo(text)),
	}
}

export default connect(null, mapDispatchToProps)(NewItem)