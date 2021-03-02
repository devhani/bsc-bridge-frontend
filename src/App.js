import styled from 'styled-components';
import bsc, { UseWalletProvider } from '@binance-chain/bsc-use-wallet';
import Home from './pages/Home';
import Header from './components/Header';
import WalletPopupProvider from './contexts/WalletPopup';

const RootDiv = styled.div`
  text-align: center;
`;

function App() {
    return (
        <RootDiv>
            <UseWalletProvider connectors={{
                walletconnect: {rpcUrl: 'https://bsc-dataseed.binance.org'},
                bsc,
            }} chainId={56}>
                <WalletPopupProvider>
                    <Header/>
                    <Home/>
                </WalletPopupProvider>
            </UseWalletProvider>
        </RootDiv>
    );
}

export default App;
