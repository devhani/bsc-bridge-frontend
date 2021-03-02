import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import SelectToken from './components/SelectToken';
import InputAmount from './components/InputAmount';
import Footer from '../../components/Footer';
import WalletProviderPopup from '../../components/Popup/WalletProvider';
import useWalletPopup from '../../hooks/useWalletPopup';

const MainDiv = styled.div`
  max-width: 600px;
  margin: 0 auto 0;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: left;
  justify-content: center;
`;

const SwapDiv = styled.div`
  padding-bottom: 130px;
  b {
      font-size: 20px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  width: 600px;
  margin-top: 10px;
  margin-bottom: 10px;
  > * {
    margin-right: 10px;
  }
`;

const Button = styled.button`
  -webkit-box-align: center;
  align-items: center;
  background-color: #F0B90B;
  border: 2px solid #F0B90B;
  color: #212833;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  height: 36px;
  -webkit-box-pack: center;
  justify-content: center;
  outline: none;
  background-image: linear-gradient(180deg,#F8D12F 0%,#F0B90B 100%);
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 292px;
`;

function Main(props) {
    const {walletPopup} = useWalletPopup();
    return (
        <MainDiv>
          <SwapDiv>
            <b>ERC20 {'->'} BEP20</b>
            <FlexDiv>
              <SelectToken/>
              <InputAmount/>
            </FlexDiv>
            <FlexDiv>
              <Button>Approve</Button>
              <Button>Transit to BSC Network</Button>
            </FlexDiv>
          </SwapDiv>
          <SwapDiv>
            <b>BEP20 {'->'} ERC20</b>
            <FlexDiv>
              <SelectToken/>
              <InputAmount/>
            </FlexDiv>
            <FlexDiv>
              <Button>Approve</Button>
              <Button>Transit to Ethereum Network</Button>
            </FlexDiv>
          </SwapDiv>
          <SwapDiv>
              <b>Transit Records</b>
          </SwapDiv>
            {walletPopup && <WalletProviderPopup/>}
          <Footer/>
        </MainDiv>
    );
}

export default Main;
