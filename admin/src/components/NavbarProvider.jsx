
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const NavbarProvider = () => {

  const { navigate, userType, setToken2 } = useContext(AppContext)

  const logout = () => {
    setToken2("")
    localStorage.removeItem("token2")
  }
  return (
    <div className='flex items-center justify-between py-5 px-[4%]' >
      <p onClick={(() => navigate('/'))} className="text-4xl text-green-400 font-bold cursor-pointer" >FarmRent</p>
      <div className='flex items-center gap-3' >
<<<<<<< HEAD
        <a href='' className='border px-5 py-1 rounded-full border-black' >Former</a>
=======
        <a href='https://farm-rent-frontend.vercel.app/' className='border px-5 py-1 rounded-full border-black' >Former</a>
>>>>>>> 046755e9f54cf077c07c56559394e2fff5b1d5a2
        <button onClick={logout} className='px-5 py-2 sm:px-6 text-xs sm:text-sm bg-gray-700 text-white rounded-full' >Logout</button>
      </div>
    </div>
  )
}

export default NavbarProvider
