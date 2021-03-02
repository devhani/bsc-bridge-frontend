import React from 'react'
import styled from 'styled-components'
import useWalletPopup from '../../hooks/useWalletPopup';

const RootDiv = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  position: fixed;
  inset: 0px;
`;

const BackgroundDiv = styled.div`
  background-color: rgba(10,10,10,0.9);
  position: absolute;
  inset: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupDiv = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  position: relative;
  width: 100%;
  max-width: 512px;
`;

const PopupBackgroundDiv = styled.div`
  padding: 0px 20px;
  background: #282c34;
  border: 1px solid rgb(226, 214, 207);
  border-radius: 12px;
  box-shadow: #282c34 1px 1px 0px inset;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 30vh;
`;

const TitleDiv = styled.div`
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  font-size: 18px;
  font-weight: 700;
  height: 72px;
  -webkit-box-pack: center;
  justify-content: center;
`;

const ContentDiv = styled.div`
  padding: 36px;
  display: flex;
  flex-direction: column;
`;

function WalletProviderPopup() {
    const {showWalletPopup} = useWalletPopup();
    return (
        <RootDiv>
            <BackgroundDiv onClick={() => showWalletPopup(false)}>
                <PopupDiv>
                    <PopupBackgroundDiv>
                        <TitleDiv>Connect to a wallet</TitleDiv>
                        <ContentDiv>
                            <button>
                                Metamask
                            </button>
                            <button>
                                Binance Smart Chain
                            </button>
                        </ContentDiv>
                    </PopupBackgroundDiv>
                </PopupDiv>
            </BackgroundDiv>
        </RootDiv>
    );
}

export default WalletProviderPopup;
