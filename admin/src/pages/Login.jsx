import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import { AppContext } from "../context/AppContext"

const Login = () => {


    const { backendUrl, setToken2 } = useContext(AppContext)


    const [email, setEmail] = useState("admin@gmail.com")
    const [password, setpassword] = useState("apassword")


    const handleUserLogin = async (event) => {
        event.preventDefault()



        try {
            const response = await axios.post(backendUrl + '/api/provider/login', { email, password })


            if (response.data.success) {
                toast.success(response.data.message);
                setToken2(response.data.token)
                console.log(response.data.token);
                
                localStorage.setItem('token2', response.data.token)
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    return (
        <div className="w-[450px] rounded-xl border-2 shadow-xl m-auto mt-44">
            <form onSubmit={handleUserLogin} className="flex flex-col w-full px-10 py-14 ">

                <h1 className="text-3xl text-center font-bold mb-7" >Admin Login</h1>

                {/* -------- userName ------- */}
                <label className="text-gray-700 font-medium mb-2" htmlFor="username">Email</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="admin@gmail.com" className="border border-gray-300 p-1.5 pl-3 rounded-sm outline-none focus:outline-none focus:border-green-600 focus:shadow-sm focus:shadow-green-400 transition-all duration-500 mb-5" required type="text" name="username" id="username" />

                {/* --------- password  ------------------ */}
                <label className="text-gray-700 font-medium  mb-2
        " htmlFor="password">Password</label>
                <input placeholder="password" onChange={(e) => setpassword(e.target.value)} value={password} className="border border-gray-300 p-1.5 pl-3 rounded-sm outline-none focus:outline-none focus:border-green-600 focus:shadow-sm focus:shadow-green-400 transition-all duration-500 mb-2" required type="password" name="password" id="password" />

                {/* ---------- login button --------------- */}
                <button className={`bg-black text-white text-[18px] hover:bg-green-500 py-1.5 mt-3 cursor-pointer transition-all duration-300 `} type="submit" value="Log In">Login</button>
            </form>
        </div>
    )
}

export default Login
