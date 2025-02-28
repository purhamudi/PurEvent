import './App.css'
import { RouterProvider } from 'react-router-dom';
import './styles/styles.scss'
import './styles/fonts.scss'
import { useMemo } from 'react';
import pCreateBrowserRouter from './Routes';

function App() {
  const router = useMemo(()=>pCreateBrowserRouter(),[]);
  return (
    <div className='w-[100vw] h-full bg-brand-50'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App



