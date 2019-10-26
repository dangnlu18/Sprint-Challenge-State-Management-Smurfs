import React from 'react';
import SmurfCard from './smurfCard';


const SmurfsList = (props)=>{
	console.log(props.smurfs)
	  return (
    <div className="container">
      {props.smurfs ? (
        <div className="card-wrapper">
          {props.smurfs.map((item, index) => (
            <SmurfCard key={index} smurf={item} removeSmurf={props.removeSmurf}/>
          ))}
        </div>
      ) : (
        <p>No smurfs are hiding here!</p>
      )}
    </div>
  );
};




export default SmurfsList;