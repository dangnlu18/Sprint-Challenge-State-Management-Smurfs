import React from 'react';
import { Card } from 'semantic-ui-react';

import styled from 'styled-components';

const CustomCard = styled(Card)`
  &&& {
    width: 25%;
    padding: 5%;
  }
`


const SmurfCard = props => {
  
  const handleClick = e => {
    e.preventDefault();
    props.removeSmurf(props.smurf)
  }

  return (
    
    <CustomCard>
      <Card.Header>
        {props.smurf.name}
      </Card.Header>
      <Card.Description>
        Age: {props.smurf.age} <br/>
        Height: {props.smurf.height}
      </Card.Description>
      <button onClick={handleClick} className='button'> Remove </button>
    </CustomCard>

  );
};



export default SmurfCard;
