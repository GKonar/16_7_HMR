import React from 'react';
import style from "./Title.css";
// komponent prezentacyjny
const Title = props =>  //props zawsze dostajemy od parenta
	<div>
		<h1 className={style.top}>{props.title}</h1> 
		<h2 className={style.bottom}>{props.tasks}</h2>
	</div>

export default Title;

