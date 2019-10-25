import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/smurfs';
import "./App.css";



function App(props){

  useEffect(()=>{
    props.getSmurfs()
  })
  

  return(
    <div className="App">
      <h1> SMURFS </h1>
    </div>
    
    )


}

function mapStateToProps(state){
  return{
    smurfs: state.smurfs
  }
}

const mapDispatchToProps ={
  getSmurfs
}

export default connect(mapStateToProps, mapDispatchToProps)(App);