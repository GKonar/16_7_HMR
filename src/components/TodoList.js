import React from 'react';
import style from './TodoList.css';
import LiItem from './Todo';

const TodoList = props => {
  const listItems = props.list.map(element => 
    <LiItem key={element.id} id={element.id} remove={props.removeLi} name={element.text} />)
    return (
      <ul className={style.TodoLook}>{listItems}</ul>
    )
}

export default TodoList;
