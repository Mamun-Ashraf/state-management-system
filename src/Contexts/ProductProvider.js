import React, { createContext, useContext, useEffect, useReducer } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    const initialState = {};
    const productReducer = (state, action) => {
        return;
    }

    const [state, dispatch] = useReducer(productReducer, initialState);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])

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

export const useProduct = () => {
    const context = useContext(ProductContext);
    return context;
}

export default ProductProvider;