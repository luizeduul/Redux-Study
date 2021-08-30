import React from 'react';

import Card from '../../components/Card';

import { Container, CardLine } from './styles';

const Home = () => {
  return (
    <Container>
      <CardLine>
        <Card title="Card">
          <p>Oie</p>
        </Card>
      </CardLine>
    </Container>
  )
}

export default Home;