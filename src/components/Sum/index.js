import React from 'react';

import Card from '../Card';

import { Container } from './styles';

const Sum = ({ min, max }) => {
    return (
        <Card title="Soma de números">
            <Container>
                <span>Resultado: </span>
                <strong>{max + min}</strong>
            </Container>
        </Card>
    )
}

export default Sum;