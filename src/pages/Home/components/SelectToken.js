import React from 'react';
import styled from 'styled-components';
import logo from '../../../assets/img/itam-logo.png';

const SelectTokenDiv = styled.div`
  cursor: pointer;
  border: 2px solid #ffffff;
  display: flex;
  flex-direction: rows;
  align-items: center;
  justify-content: center;
  width: 60%;
  text-overflow: ellipsis;
  overflow: hidden;
  
  &:hover {
    border: 2px solid #F0B90B;
  }
`;

const TokenSymbolImg = styled.img`
  height: 37px;
  padding-right: 7px;
`;

function SelectToken(props) {
    return (
        <SelectTokenDiv>
            <TokenSymbolImg src={props.symbolImage || logo} alt='symbol' />
            <p>{props.symbol || 'ITAM'} {`(${props.contractAddress || '0x3b4f7CB9eaaa...'})`}</p>
            <span className='material-icons'>keyboard_arrow_down</span>
        </SelectTokenDiv>
    );
}

export default SelectToken;
