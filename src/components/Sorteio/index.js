import React from 'react';
import { connect } from 'react-redux';

import Card from '../Card';

import { Container } from './styles';

const Sorteio = ({ min, max }) => {
    const random = parseInt(Math.random() * (max - min)) + min;
    return (
        <Card title="Sorteio de um número" background="#383994">
            <Container>
                <span>Resultado: </span>
                <strong>{random}</strong>
            </Container>
        </Card>
    );
}

const mapStateToProps = (state) => ({
    min: state.numbers.min,
    max: state.numbers.max
});
export default connect(mapStateToProps)(Sorteio);
