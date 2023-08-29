'use client';

import { createContext, useContext, useState } from "react";

const BasketContext = createContext({})

export const BasketContextProvider = ({ children }) => {
    
    const [basketContext, setBasketContext] = useState([]);

    return (
        <BasketContext.Provider value={{ basketContext, setBasketContext }}>
            {children}
        </BasketContext.Provider>
    )
};

export const useBasketContext = () => useContext(BasketContext);