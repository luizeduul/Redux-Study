import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 5px;
  background-color: ${props => props.background};
  align-items: center;
  width: 330px;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: #DDD;
`;

export const CardContent = styled.div`
  padding: 20px;
`;