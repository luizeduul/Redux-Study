import React from 'react';
import { connect } from 'react-redux';

import Card from '../Card';

import { changeMinValue, changeMaxValue } from '../../redux/store/actions/numberActions';

import { InputContainer } from './styles';
const Interval = ({ changeMax, changeMin, min, max }) => {
    return (
        <Card title="Intervalo de números" background="#FC3F04">
            <InputContainer>
                <strong>Valor mínimo: </strong>
                <input
                    type="number"
                    value={min}
                    onChange={event => changeMin(Number(event.target.value))}
                />
            </InputContainer>

            <InputContainer>
                <strong>Valor máximo: </strong>
                <input
                    type="number"
                    value={max}
                    onChange={event => changeMax(Number(event.target.value))}
                />
            </InputContainer>
        </Card>
    );
}

const mapStateToProps = (state) => ({
    min: state.numbers.min,
    max: state.numbers.max
});

function mapDispatchToProps(dispatch) {
    return {
        changeMin(newNumber) {
            const action = changeMinValue(newNumber);
            dispatch(action);
        },

        changeMax(newNumber) {
            const action = changeMaxValue(newNumber);
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval);