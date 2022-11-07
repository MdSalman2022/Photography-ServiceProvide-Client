import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Router/Routes/Routes';

function App() {
  return (
    <div className="background h-screen">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
