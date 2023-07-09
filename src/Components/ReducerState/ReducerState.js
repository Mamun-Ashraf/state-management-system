import React, { useReducer } from 'react';

const ReducerState = () => {
    const initialState = 0;
    const reducer = (state, action) => {
        if (action.type === 'INCREMENT') {
            return state + action.payload;
        }
        else if (action.type === 'DECREMENT') {
            return state - action.payload;
        } else {
            return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className='mt-12 w-1/4 mx-auto text-center p-5 shadow-2xl'>

            <h1 className='mb-7 text-lg font-medium'>Count : {state}</h1>

            <div className=''>
                <button
                    onClick={() => dispatch({ type: "DECREMENT", payload: 3 })} type="button"
                    className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-5 mb-2">Decrement</button>

                <button
                    onClick={() => dispatch({ type: "INCREMENT", payload: 5 })} type="button"
                    className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Increment</button>
            </div>

        </div>
    );
};

export default ReducerState;