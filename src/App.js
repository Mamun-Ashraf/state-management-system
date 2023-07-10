import { RouterProvider } from 'react-router-dom';
import './App.css';
// import FormWithReducer from './Components/FormWithReducer/FormWithReducer';
// import ReducerState from './Components/ReducerState/ReducerState';
import router from './Routers/Routers/Routers';

function App() {
  return (
    <div>
      {/* <ReducerState></ReducerState>
      <FormWithReducer></FormWithReducer> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
