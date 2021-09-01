import React from 'react';

import { Container, CardHeader, CardContent } from './styles';

const Card = ({title, children, background}) => {
  return (
    <Container background={background}>
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