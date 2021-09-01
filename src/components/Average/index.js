import React from 'react';
import { connect } from 'react-redux';

import Card from '../Card';

import { Container } from './styles';
const Average = ({ min, max }) => {

    return (
        <Card title="Média de números" background="#2C8983">
            <Container>
                <span>Resultado: </span>
                <strong>{(max + min) / 2}</strong>
            </Container>
        </Card>
    );
}

const mapStateToProps = (state) => ({
    min: state.numbers.min,
    max: state.numbers.max
});
export default connect(mapStateToProps)(Average);