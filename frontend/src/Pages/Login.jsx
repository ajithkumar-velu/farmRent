import { useContext, useEffect, useState } from "react"

import axios from "axios"
import { toast } from "react-toastify"
import { AppContext } from "../Context/AppContext"

const Login = () => {


  const { backendUrl, setToken1, token1, navigate } = useContext(AppContext)


  const [name, setname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const [currentState, setCurrentState] = useState("Login")

  const handleUserLogin = async (event) => {
    event.preventDefault()
    try {
      if (currentState === "Login") {

        const response = await axios.post(backendUrl + '/api/farmer/login', { email, password })

        if (response.data.success) {
          setToken1(response.data.token)
          localStorage.setItem('token1', response.data.token)
          scrollTo(0, 0)
          navigate('/')

        } else {
          toast.error(response.data.message)
        }
      }
     else {

      const response = await axios.post(backendUrl + '/api/farmer/register', { name, email, password })

      if (response.data.success) {
        setToken1(response.data.token)
        localStorage.setItem('token1', response.data.token)
        navigate('/')
      } else {
        toast.error(response.data.message)
      }
    }
  }
  catch (error) {
    console.log(error);
    toast.error(error.message)
  }
}


// useEffect(() => {
//   farmersInfo.filter((item) => {

//     if (item.name === email && item.password === password) {
//       setloginCheck(true)
//       return
//     } else {
//       setloginCheck(false)
//     }
//   })


// }, [password, email])
useEffect(() => {
  if(token1)
    navigate('/')
}, [token1])

return (
  <div className="w-[500px] rounded-xl border-2 shadow-xl m-auto mt-44">
    <form onSubmit={handleUserLogin} className="flex flex-col w-full px-10 py-14 ">

      {currentState === "Login"
        ? <h1 className="text-3xl text-center font-semibold mb-7" > Login</h1>
        : <h1 className="text-3xl text-center font-semibold mb-7" >Sign In</h1>

      }

      {currentState == "Sign In" && <> <label className="text-gray-500 mb-2" htmlFor="name">Name</label>
        <input onChange={(e) => setname(e.target.value)} value={name} className="border border-gray-300 p-1.5 pl-3 rounded-sm outline-none focus:outline-none focus:border-green-600 focus:shadow-sm focus:shadow-green-400 transition-all duration-500 mb-5" required type="text" name="name" id="name" />
      </>}


      {/* -------- userName ------- */}
      <label className="text-gray-500 mb-2" htmlFor="username">Email</label>
      <input onChange={(e) => setEmail(e.target.value)} value={email} className="border border-gray-300 p-1.5 pl-3 rounded-sm outline-none focus:outline-none focus:border-green-600 focus:shadow-sm focus:shadow-green-400 transition-all duration-500 mb-5" required type="text" name="username" id="username" />

      {/* --------- password  ------------------ */}
      <label className="text-gray-500 mb-2
        " htmlFor="password">Password</label>
      <input onChange={(e) => setpassword(e.target.value)} value={password} className="border border-gray-300 p-1.5 pl-3 rounded-sm outline-none focus:outline-none focus:border-green-600 focus:shadow-sm focus:shadow-green-400 transition-all duration-500 mb-2" required type="password" name="password" id="password" />

      {currentState === "Login"
        ? <p className="text-right mb-3 cursor-pointer" >Create Account <span onClick={() => setCurrentState("Sign In")} className="text-blue-600" >New User</span></p>

        : <p className="text-right mb-3 cursor-pointer" >Already have an Account? <span onClick={() => setCurrentState("Login")} className="text-blue-600" >LogIn</span></p>
      }
      {/* ---------- login button --------------- */}
      <button className={`bg-black text-white text-[18px] hover:bg-green-500 py-1.5 mt-3 cursor-pointer transition-all duration-300 `} type="submit" value="Log In">{currentState === "Login" ? 'Login' : "Sign In"}</button>
    </form>
  </div>
)
}

export default Login
