import React, { useReducer } from 'react';

const FormWithReducer = () => {

    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        education: '',
        quantity: 0,
        feedback: '',
        term: false
    };
    const reducer = (state, action) => {
        switch (action.type) {
            case "INPUT":
                return {
                    ...state,
                    [action.payload.name]: action.payload.value
                };

            case "INCREMENT":
                return {
                    ...state,
                    quantity: state.quantity + 1
                }

            case "DECREMENT":
                return {
                    ...state,
                    quantity: state.quantity - 1
                }
            case "TOGGLE":
                return {
                    ...state,
                    term: !state.term
                }

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const handleSubmit = event => {
        event.preventDefault();
        console.log(state);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-6 mb-6 md:grid-cols-2 mt-20 w-1/3 mx-auto">
                <div>
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>

                    <input
                        type="text"
                        name="firstName" id="firstName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} />
                </div>

                <div>
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>

                    <input type="text"
                        name='lastName' id="lastName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} />
                </div>

                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>

                    <input type="email"
                        name='email' id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })} />
                </div>

                <div>
                    <h3 className="mb-4 font-semibold text-gray-900">Gender</h3>
                    <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white sm:flex">
                        <li className="w-full">
                            <div className="flex items-center pl-3">
                                <input
                                    id="male" type="radio" value="male" name="gender"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                                    onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                                />

                                <label htmlFor="male" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male </label>
                            </div>
                        </li>
                        <li className="w-full">
                            <div className="flex items-center pl-3">
                                <input
                                    id="female" type="radio" value="female" name="gender"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                                    onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                                />

                                <label htmlFor="female" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                            </div>
                        </li>
                        <li className="w-full">
                            <div className="flex items-center pl-3">
                                <input
                                    id="other" type="radio" value="other" name="gender"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                                    onClick={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                                />

                                <label htmlFor="other" className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other</label>
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900">Education</label>
                    <select
                        name='education' id="education"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        onChange={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}
                    >
                        <option value="SSC">SSC</option>
                        <option value="HSC">HSC</option>
                        <option value="BSc">BSc</option>
                        <option value="MSc">MSc</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-900">Number of PCs</label>

                    <div className='flex'>

                        <button
                            type='btn'
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl w-full sm:w-auto px-5 py-2.5 text-center"
                            onClick={() => dispatch({ type: "DECREMENT" })}
                        >-</button>

                        <div
                            className='mx-3 px-12 py-2 border border-slate-700 rounded-lg font-medium text-lg'
                        >{state.quantity}</div>

                        <button
                            type='btn'
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl w-full sm:w-auto px-5 py-2.5 text-center"
                            onClick={() => dispatch({ type: "INCREMENT" })}
                        >+</button>
                    </div>
                </div>

                <div>
                    <label htmlFor="feedback" className="block mb-2 text-sm font-medium text-gray-900">Feedback</label>
                    <textarea
                        name='feedback' id="feedback" rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        onBlur={(e) => dispatch({ type: 'INPUT', payload: { name: e.target.name, value: e.target.value } })}>
                    </textarea>
                </div>
                <br />
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input
                            name='term' id="term" type="checkbox" value=""
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                            onClick={() => dispatch({ type: "TOGGLE" })}
                        />
                    </div>
                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">I agree with the terms and conditions</label>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 font-medium rounded-lg w-full p-2 text-center"
                    disabled={!state.term}
                >Submit</button>

            </div>

        </form>
    );
};

export default FormWithReducer;