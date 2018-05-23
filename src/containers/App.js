import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';

class App extends React.Component {
	constructor(props){ 
		super(props); 
		this.removeTodo = this.removeTodo.bind(this) // do zachowania kontekstu
		this.state = { 
			data: [{
				id: 1,
    				text: 'clean room'
				}, {
				id: 2,
    				text: 'wash the dishes'
				}, {
				id: 3,
    				text: 'feed my cat'
				}]
			};
		}
	
	addTodo(val) { 
		const todo = {
			text: val,
			id: uuid.v4(), 
		};
		const data = [...this.state.data, todo]; 
		this.setState({data});// data:data		 
	}

	removeTodo(id) {
		const remainder = this.state.data.filter(todo => todo.id !== id);
		//The filter() method creates an array filled with all array elements that pass a test (provided as a function). 
		this.setState({data: remainder});

	}

	render() {  
    return ( // użycie pierwszego loadera CSS
        <div className={style.TodoApp}> 
			<Title title = 'ToDo list App' tasks = 'Things to do'/>
			<TodoList list = {this.state.data} removeLi = {this.removeTodo} />
		</div>
    );
}				  
}



export default App;