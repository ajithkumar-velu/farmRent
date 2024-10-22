import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Machines from './Pages/Machines'
import Login from './Pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MachineInfo from './Pages/MachineInfo'
import Orders from './Pages/Orders'


const App = () => {







  return (
    // mx-4 sm:mx-[10%]
    <div className='mt-[80px]' >
      <Navbar />
      <ToastContainer />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/machines" element={<Machines />} />
        <Route path="/machines/:category" element={<Machines />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
        <Route path='/machine/:macId' element={<MachineInfo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<Orders />} />
        {/* <Route path='/farmerCreateAccount' element={<FarmerCreateAccount />} /> */}
      </Routes>

      <Footer />




    </div>

  )
}

export default App
