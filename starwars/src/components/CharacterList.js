import React from 'react';
import Character from './Character';

const CharacterList = props => {
	console.log(props.charsProp)
	return (
		<div>
			{props.charsProp.map(item => (
				<Character 
				name={item.name}
				key={item.name}
				/>
			))}
		</div>
	);
}

export default CharacterList;