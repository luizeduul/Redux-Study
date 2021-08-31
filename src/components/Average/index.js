import React from 'react';

import Card from '../Card';

import { Container } from './styles';
const Average = ({ min, max }) => {

    return (
        <Card title="Média de números">
            <Container>
                <span>Resultado: </span>
                <strong>{(max + min) / 2}</strong>
            </Container>
        </Card>
    );
}

export default Average;