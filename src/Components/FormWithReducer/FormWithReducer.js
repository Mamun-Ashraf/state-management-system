import React from 'react';

const FormWithReducer = () => {
    return (
        <form>
            <div class="grid gap-6 mb-6 md:grid-cols-2 mt-20 w-1/3 mx-auto">
                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>

                <div>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>

                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                </div>

                <div>
                    <h3 class="mb-4 font-semibold text-gray-900">Gender</h3>
                    <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white sm:flex">
                        <li class="w-full">
                            <div class="flex items-center pl-3">
                                <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                <label for="horizontal-list-radio-license" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male </label>
                            </div>
                        </li>
                        <li class="w-full">
                            <div class="flex items-center pl-3">
                                <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                <label for="horizontal-list-radio-id" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                            </div>
                        </li>
                        <li class="w-full">
                            <div class="flex items-center pl-3">
                                <input id="horizontal-list-radio-millitary" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                                <label for="horizontal-list-radio-millitary" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Other</label>
                            </div>
                        </li>
                    </ul>
                </div>

                <div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Education</label>
                    <select id="education" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option selected>Choose One</option>
                        <option value="SSC">SSC</option>
                        <option value="HSC">HSC</option>
                        <option value="BSc">BSc</option>
                        <option value="MSc">MSc</option>
                    </select>
                </div>

                <div>

                </div>

                <div>
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Feedback</label>
                    <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "></textarea>
                </div>

                <div class="flex items-start mb-6">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" />
                    </div>
                    <label for="remember" class="ml-2 text-sm font-medium text-gray-900">I agree with the terms and conditions</label>
                </div>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>

            </div>

        </form>
    );
};

export default FormWithReducer;