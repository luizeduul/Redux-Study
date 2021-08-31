import React, { useState } from 'react';

import Interval from '../../components/Interval';
import Average from '../../components/Average';
import Sum from '../../components/Sum';
import Sorteio from '../../components/Sorteio';

import { Container, CardLine } from './styles';

const Home = () => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);
  return (
    <Container>
      <CardLine>
        <Interval 
          min={min} 
          max={max} 
          onMinChanged={setMin} 
          onMaxChanged={setMax}
        />
      </CardLine>
      <CardLine>
        <Average min={min} max={max}></Average>

        <Sum min={min} max={max}/>

        <Sorteio min={min} max={max}/>
      </CardLine>
    </Container>
  )
}


export default Home;