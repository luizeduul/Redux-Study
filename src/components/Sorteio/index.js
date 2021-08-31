import React from 'react';

import Card from '../Card';

import { Container } from './styles';

const Sorteio = ({ min, max }) => {
    const random = parseInt(Math.random() * (max - min)) + min;
    return (
        <Card title="Sorteio de um número">
            <Container>
                <span>Resultado: </span>
                <strong>{random}</strong>
            </Container>
        </Card>
    )
}

export default Sorteio;