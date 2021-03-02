import React, { createContext, useState } from 'react';

export const Context = createContext();
export default function WalletPopupProvider({ children }) {
    const [walletPopup, showWalletPopup] = useState(false);
    return (
        <Context.Provider value={{walletPopup, showWalletPopup}}>{children}</Context.Provider>
    );
}
