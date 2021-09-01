import React from 'react';
import { connect } from 'react-redux';

import Card from '../Card';

import { Container } from './styles';

const Sum = ({ min, max }) => {
    return (
        <Card title="Soma de números" background="#2567F6">
            <Container>
                <span>Resultado: </span>
                <strong>{max + min}</strong>
            </Container>
        </Card>
    )
}
const mapStateToProps = (state) => ({
    min: state.numbers.min,
    max: state.numbers.max
});
export default connect(mapStateToProps)(Sum);