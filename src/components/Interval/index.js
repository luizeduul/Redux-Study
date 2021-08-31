import React from 'react';

import Card from '../Card';

import { InputContainer } from './styles';
const Interval = ({ min, max, onMinChanged, onMaxChanged }) => {
    return (
        <Card title="Intervalo de números">
            <InputContainer>
                <strong>Valor mínimo: </strong>
                <input
                    type="number"
                    value={min}
                    onChange={event => onMinChanged(Number(event.target.value))}
                />
            </InputContainer>

            <InputContainer>
                <strong>Valor máximo: </strong>
                <input
                    type="number"
                    value={max}
                    onChange={event => onMaxChanged(Number(event.target.value))}
                />
            </InputContainer>
        </Card>
    );
}

export default Interval;