import React from 'react';
import style from './Todo.css';

const LiItem = props => 
	<li className={style.liLook} id={props.id} onClick={() => props.remove(props.id)}>
 		{props.name}
	</li>;

export default LiItem;
