import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Router/Routes/Routes';

function App() {
  return (
    <div className="bg-base-100 h-screen">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
