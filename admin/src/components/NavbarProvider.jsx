
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const NavbarProvider = () => {
  
  const { navigate, userType, setToken2} = useContext(AppContext)

  const logout = () => {
    setToken2("")
    localStorage.removeItem("token2")
  }
  return (
    <div className='flex items-center justify-between py-5 px-[4%]' >
      <p onClick={(() => navigate('/'))} className="text-4xl text-green-400 font-bold cursor-pointer" >FarmRent</p>
      <button onClick={logout} className='px-5 py-2 sm:px-6 text-xs sm:text-sm bg-gray-700 text-white rounded-full' >Logout</button>
    </div>
  )
}

export default NavbarProvider
