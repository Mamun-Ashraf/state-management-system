import React, { createContext } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    const productInfo = {
        test: "Checked"
    };

    return (
        <div>
            <ProductContext.Provider value={productInfo}>
                {children}
            </ProductContext.Provider>
        </div>
    );
};

export default ProductProvider;