import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/itam-logo.png';
import UnlockWallet from '../UnlockWallet';
import WalletProviderPopup from '../Popup/WalletProvider';

const TitleImg = styled.img`
  height: 8vmin;
  pointer-events: none;
  padding: 14px;
`;

const TitleHeader = styled.header`
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

function Header() {
    return (
        <>
            <UnlockWallet/>
            <TitleHeader>
                <TitleImg src={logo} className="App-logo" alt="logo"/>
                <p>ITAM Binance Smart Chain Bridge</p>
            </TitleHeader>
        </>
    );
}

export default Header;
