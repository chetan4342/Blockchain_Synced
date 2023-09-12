import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { createContext } from 'react';

const Crypto = createContext();

const CryptoContext = ({children}) => {
    const [currency, setCurrency] = useState("INR");
    const [symbol, setSymbol] = useState("Rs")

    useEffect(() => {
    if(currency === "INR") setSymbol("Rs");
    else if (currency=== "USD") setSymbol("$");
    }, [currency])
  return (
    <Crypto.Provider value ={{currency,symbol,setCurrency}}>
     {children}
    </Crypto.Provider>
  )
}

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto)
}