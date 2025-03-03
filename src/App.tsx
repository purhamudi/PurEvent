import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { pCreateBrowserRouter } from './Routes';
import './styles/fonts.scss';
import './styles/styles.scss';

function App() {
  const router = useMemo(()=>pCreateBrowserRouter(),[]);
  return (
    <div className='w-[100vw] h-full bg-brand-50'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App



