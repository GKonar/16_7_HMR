import React from 'react';
import style from './TodoList.css'

const TodoList = props => {
	const listItems = props.list.map(element => 
		<li className={style.liLook} key={element.id} onClick={() => props.removeLi(element.id)}>
			{element.text}
		</li>
		) 
	return (
		<ul className ={style.TodoLook}>{listItems}</ul> 
	)
}

export default TodoList;