import styled from 'styled-components';

export const InputContainer = styled.span`
    align-items: center;
    justify-content: center;
    
    strong{
        font-size: 1.6rem;
    }

    input{
        width: 100px;
        font-size: 1.8rem;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;