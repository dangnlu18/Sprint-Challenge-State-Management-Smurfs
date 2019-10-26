import React, { useState } from 'react';
import Shroom from '../images/shroom.jpg';


function SmurfForm(props){

	const [smurf, setSmurf] = useState({
		name: '',
		age: '',
		height: ''
	})
	
	const handleSubmit = e =>{
		e.preventDefault();
		console.log(smurf)
		props.addSmurf(smurf)
		
	}

	const handleChange = e =>{
		e.preventDefault();
		setSmurf({...smurf,
			[e.target.name]: e.target.value})
	}
	

	return(
		<div className="form-container">
			<img src={Shroom} alt='mushroom'/>
			<form onSubmit={handleSubmit}>
				
				<input name='name' type="text" value={smurf.name} placeholder='name'onChange={handleChange} />
				<input name='age' type="text" value={smurf.age} placeholder='age' onChange={handleChange}/>
				<input name='height' type="text" value={smurf.height} placeholder='height (cm)' onChange={handleChange} />
				<button type="submit">Add New Smurf</button>

			</form>
		</div>

		)
}

export default SmurfForm;