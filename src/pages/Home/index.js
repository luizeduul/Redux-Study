import React from 'react';

import Interval from '../../components/Interval';
import Average from '../../components/Average';
import Sum from '../../components/Sum';
import Sorteio from '../../components/Sorteio';

import { Container, CardLine } from './styles';

const Home = () => {

  return (
    <Container>
      <CardLine>
        <Interval/>
      </CardLine>
      <CardLine>
        <Average />

        <Sum />

        <Sorteio />
      </CardLine>
    </Container>
  )
}


export default Home;