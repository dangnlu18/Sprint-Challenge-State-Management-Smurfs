import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, removeSmurf } from '../actions/smurfs';
import SmurfsList from '../smurfcomps/smurfsList';
import SmurfForm from '../smurfcomps/smurfForm';
import "./App.css";



function App(props){

  useEffect(()=>{
    props.getSmurfs()
  }, [])
  

  return(
    <div className="App">
      <h1> SMURFS </h1>
      <SmurfForm addSmurf={props.addSmurf}/>
      <SmurfsList smurfs={props.smurfs} removeSmurf={props.removeSmurfs} />
    </div>
    
    )
}

function mapStateToProps(state){
  return{
    smurfs: state.smurfs
  }
}

const mapDispatchToProps ={
  getSmurfs,
  addSmurf,
  removeSmurf
}

export default connect(mapStateToProps, mapDispatchToProps)(App);