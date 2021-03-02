import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  color: rgb(255, 255, 255);
  width: 40%;
  position: relative;
  font-weight: 500;
  outline: none;
  border: 2px solid #ffffff;
  flex: 1 1 auto;
  background-color: rgb(33, 36, 41);
  font-size: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 3px;
  appearance: textfield;
  
  &:hover {
    border: 2px solid #F0B90B;
  }
`;

function InputAmount() {
    return (
        <Input placeholder={'0.0'}/>
    );
}

export default InputAmount;
