import { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { AppContext } from "../Context/AppContext"
import { image } from "../assets/Assets"
const Navbar = () => {

    const { navigate, userType, setToken1, token1 } = useContext(AppContext)

    const [pos, setPos] = useState()

    const handleNavbarScroll = () => {
        if (window.scrollY >= 40) {
            setPos(true)
        } else {
            setPos(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handleNavbarScroll)

    })

    const logout = () => {
        navigate(`/login`)
        localStorage.removeItem("token1")
        setToken1("")
    }

    return (
        // mx-4 sm:mx-[10%]
        <div className={`px-4 sm:px-[10%] z-[9999] fixed right-0 left-0 top-0 transition-all duration-300 border-b border-b-gray-400 ${pos ?
            "bg-white backdrop-blur-0 bg-opacity-80 border-zinc-700 " :
            "bg-transparent"
            }`} >

            <div className="flex items-center justify-between text-sm py-4" >
                <p onClick={(() => navigate('/'))} className="text-3xl text-green-400 font-bold cursor-pointer" >FarmRent</p>
                <ul className="hidden md:flex items-start gap-5 font-medium" >
                    <NavLink to="/" className="" >
                        <li className="cursor-pointer py-1" >Home</li>
                        <hr className="outline-none hidden border-none h-0.5 bg-green-400 w-3/5 m-auto" />
                    </NavLink>
                    <NavLink to="/machines"  >
                        <li className="cursor-pointer py-1" >Machines</li>
                        <hr className="outline-none hidden border-none h-0.5 bg-green-400 w-3/5 m-auto" />
                    </NavLink>
                    <NavLink to="/about" >
                        <li className="cursor-pointer py-1" >About</li>
                        <hr className="outline-none hidden border-none h-0.5 bg-green-400 w-3/5 m-auto" />
                    </NavLink>
                    <NavLink to="/contact" >
                        <li className="cursor-pointer py-1" >Contact</li>
                        <hr className="outline-none hidden border-none h-0.5 bg-green-400 w-3/5 m-auto" />
                    </NavLink>
                </ul>
                {token1
                ? 
                <div className="relative group hidden md:block" >
                    <img className="w-5 cursor-pointer" src={image.profile_icon} alt="" />
                    <div className="pt-4 hidden absolute right-0 w-[130px] group-hover:block">
                        <div className="border backdrop-blur-lg border-gray-400 bg-zinc-100  flex flex-col gap-3 px-5 py-7" >
                            <p className="text-[15px]
                                 hover:font-semibold cursor-pointer border-b " >My profile</p>
                            <p onClick={() => navigate("/orders")} className="text-[15px]
                                 hover:font-semibold cursor-pointer border-b " >My orders</p>
                            <p onClick={logout} className="text-md hover:text-red-600 cursor-pointer border-b hover:font-semibold` text-[15px] " >Log out</p>
                        </div>
                    </div>
                </div>
                :
                <button onClick={()=>navigate('/login')} className="bg-green-400 text-white px-8 py-2 rounded-full font-light hidden md:block" >LOGIN</button> 
            }

                <div className="relative group md:hidden" >

                    <p className="text-3xl cursor-pointer" >&#9776;</p>
                    <div className="pt-6 absolute right-0 top-6 hidden group-hover:block" >
                        <div className="bg-zinc-100 min-w-44 flex flex-col gap-4 p-4 font-medium text-zinc-400 " >


                            <p onClick={() => navigate("/")} className=" hover:text-primary cursor-pointer hover:scale-x-110 pl-2 transition-all duration-300" >HOME</p>

                            <p onClick={() => navigate("/machines")} className=" hover:text-primary cursor-pointer hover:scale-x-110 pl-2 transition-all duration-300" >MACHINES</p>

                            <p onClick={() => navigate("/about")} className=" hover:text-primary cursor-pointer hover:scale-x-110 pl-2 transition-all duration-300" >ABOUT</p>

                            <p onClick={() => navigate("/contact")} className="hover:text-primary cursor-pointer hover:scale-x-110 pl-2 transition-all duration-300" >CONTACT</p>

                            <p onClick={() => navigate("/orders")} className="hover:text-primary cursor-pointer hover:scale-x-110 pl-2 transition-all duration-300" >MY ORDERS</p>

                            <p onClick={logout} className=" hover:text-primary cursor-pointer hover:scale-x-110 pl-2 transition-all duration-300" >LOGOUT</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar

