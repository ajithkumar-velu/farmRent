import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavbarProvider from './components/NavbarProvider';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add';
import Machines from './pages/Machines';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import Login from './pages/Login';
import Orders from './pages/Orders.jsx';
const App = () => {
  const { token2 } = useContext(AppContext)
  
  return (
    <div className='' >
      <ToastContainer />
      <NavbarProvider />
      <hr />

      {
        token2 === ""
          ? <Login />
          :
          <div className='flex w-full ' >
            <Sidebar />
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-700 text-base' >
              <Routes>
                <Route path='/' element={<Add />} />
                <Route path='/machines' element={<Machines />} />
                <Route path='/orders' element={<Orders />} />
              </Routes>
            </div>
          </div>
      }
    </div>

  )
}

export default App
