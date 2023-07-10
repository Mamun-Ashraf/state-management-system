import React, { useContext } from 'react';
import { ProductContext } from '../../Contexts/ProductProvider';

const Home = () => {
    // const { test } = useContext(ProductContext);
    return (
        <div>
            <h2 className='text-3xl text-center font-semibold text-yellow-500 my-12'>This is home page</h2>
            {/* <h2 className='text-center mb-5'>Testing Product Context Provider {test}</h2> */}
        </div>
    );
};

export default Home;