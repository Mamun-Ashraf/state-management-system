import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='text-3xl text-center font-semibold text-yellow-500 my-12'>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;