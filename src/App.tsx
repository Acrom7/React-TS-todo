import React from 'react'
import TodoList from './components/TodoList'
import './app.sass'

function App() {
	return (
		<div className="app">
			<div className="uk-container">
				<TodoList/>
			</div>
		</div>
	)
}

export default App
