import React from 'react';



const Character = props => {
	return (
		<div className='charBackground'>
			<h1 className='character'>{props.name}</h1>
			<div>
				<p>Gender: {props.gender}</p>
				<p>Hair Color: {props.hair_color}</p>
				<p>Skin Color: {props.skin_color}</p>
				<p>Height: {props.height}</p>
				<p>Birth date: {props.birth_year}</p>
			</div>
		</div>
	);
};

export default Character; 
