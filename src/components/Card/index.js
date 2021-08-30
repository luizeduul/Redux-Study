import React from 'react';

import { Container, CardHeader, CardContent } from './styles';

const Card = ({title, children}) => {
  return (
    <Container>
      <CardHeader>
        <span>
          {title}
        </span>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Container>
  )
}

export default Card;