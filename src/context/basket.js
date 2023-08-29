'use client';

import { createContext, useContext, useState } from "react";

const BasketContext = createContext({})

export const BasketContextProvider = ({ children }) => {
    
    const [basketActive, setBasketActive] = useState(false);

    return (
        <BasketContext.Provider value={{ basketActive, setBasketActive }}>
            {children}
        </BasketContext.Provider>
    )
};

export const useBasketContext = () => useContext(BasketContext);