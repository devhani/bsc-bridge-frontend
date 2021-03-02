import styled from 'styled-components';
import useWalletPopup from '../../hooks/useWalletPopup';

const UnlockWalletDiv = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding-top: 30px;
  width: 90%;
`;

const UnlockWalletButton = styled.button`
  -webkit-box-align: center;
  align-items: center;
  background-color: #F0B90B;
  border: 1px solid #F0B90B;
  border-radius: 15px;
  color: #212833;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  height: 36px;
  -webkit-box-pack: center;
  justify-content: center;
  outline: none;
  padding-left: 16px;
  padding-right: 16px;
  width: 156px;
`;

function UnlockWallet() {
    const {showWalletPopup} = useWalletPopup();
    return (
        <UnlockWalletDiv>
            <UnlockWalletButton onClick={() => showWalletPopup(true)}>Unlock Wallet</UnlockWalletButton>
        </UnlockWalletDiv>
    );
}

export default UnlockWallet;
