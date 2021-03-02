import { useContext } from 'react'
import { Context } from '../contexts/WalletPopup';

const useWalletPopup = () => {
    const {walletPopup, showWalletPopup} = useContext(Context);
    return { walletPopup, showWalletPopup };
};

export default useWalletPopup;
