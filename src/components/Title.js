import React from 'react';
// komponent prezentacyjny
const Title = props =>  //props zawsze dostajemy od parenta
	<div>
		<h1>{props.title}</h1> 
		<h2>{props.tasks}</h2>
	</div>

export default Title;

/*
function Title(props) {  
    return (
        <h1>{props.title}</h1>
    )
}
*/