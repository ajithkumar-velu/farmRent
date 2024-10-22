import { useContext, useState } from "react"
import { Link,  } from "react-router-dom"
import { AppContext } from "../Context/AppContext"
import axios from "axios"
import { toast } from "react-toastify"

const FarmerCreateAccount = () => {



    const { setSign, userType, backendUrl, setToken1 } = useContext(AppContext)
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    // const [address, setaddress] = useState("")
    // const [mobileNumber, setmobileNumber] = useState("")
    // const [userName, setuserName] = useState()

    // const [confirmPassword, setconfirmPassword] = useState("")
    // const [passwordMatch, setpasswordMatch] = useState(true)

    // const [farmersInfo, setfarmersInfo] = useState(() => {
    //     const storedN = localStorage.getItem('farmersInfo');
    //     return storedN ? JSON.parse(storedN) : []
    // })


    const handleUserSign = async (event) => {
        event.preventDefault()
        console.log(email, password);

        if (userType === "Provider") {
            try {
                const response = await axios.post(backendUrl + '/api/provider/register', { name, email, password })

                if (response.data.success) {
                    toast.success(response.data.message);
                    setToken1(response.data.token)
                    localStorage.setItem('token1', response.data.token)
                   
                } else {
                    toast.error(response.data.message)
                }

            } catch (error) {
                console.log(error);
                toast.error(error.message)
            }
        } 
            
        
    }




    // const handleFarmerInfo = (e) => {
    //     e.preventDefault()
    //     setfarmersInfo(prev => [...prev, {
    //         name: name,
    //         address: address,
    //         mobileNumber: mobileNumber,
    //         email: email,
    //         userName: userName,
    //         password: password
    //     }])
    //     setname("")
    //     setaddress("")
    //     setmobileNumber("")
    //     setemail("")
    //     setuserName("")
    //     setpassword("")
    //     setconfirmPassword("")
    // }

    // useEffect(() => {
    //     localStorage.setItem('farmersInfo', JSON.stringify(farmersInfo))

    // }, [farmersInfo])

    // useEffect(()=>{
    //     if(token1){
    //         if(userType === "Provider"){
    //             navigate('/add')    
    //         }else{
    //             navigate('/')
    //         }
    //     }
    // }, [token1])
    return (
        <div>
            <div>
            </div>
            <div className="w-[500px] rounded-xl border-2 shadow-xl m-auto mt-44">
                <form onSubmit={handleUserSign} action="" className="flex flex-col w-full px-10 py-14 ">

                    <h1 className="text-3xl font-medium text-center mb-7" >{userType} Sign In</h1>

                    {/* ----------------- name  ---------------------- */}
                    <label className="text-gray-500 mb-2" htmlFor="name">Name</label>
                    <input onChange={(e) => setname(e.target.value)} value={name} className="border border-gray-300 p-1.5 pl-3 rounded-sm outline-none focus:outline-none focus:border-green-600 focus:shadow-sm focus:shadow-green-400 transition-all duration-500 mb-5" required type="text" name="name" id="name" />

                    {/* ----------------- address  ---------------------- */}
                    {/* <label className="text-gray-500" htmlFor="address">Address</label>
                    <input onChange={(e) => setaddress(e.target.value)} value={address} className="border border-gray-300 p-1.5 pl-3 rounded-sm outline-none focus:outline-none focus:border-green-600 focus:shadow-sm focus:shadow-green-400 transition-all duration-500 mb-5" required type="text" name="address" id="address" /> */}

                    {/* ----------------- mobile number ---------------------- */}
                    {/* <label className="text-gray-500" htmlFor="mobileNumber">Mobile Number</label>
                    <input onChange={(e) => setmobileNumber(e.target.value)} value={mobileNumber} className="border border-gray-300 p-1.5 pl-3 rounded-sm outline-none focus:outline-none focus:border-green-600 focus:shadow-sm focus:shadow-green-400 transition-all duration-500 mb-5 appearance-none" required type="number" name="mobileNumber" id="mobileNumber" /> */}

                    {/* ----------------- email ---------------------- */}
                    <label className="text-gray-500 mb-2" htmlFor="eamil">Email</label>
                    <input onChange={(e) => setemail(e.target.value)} value={email} className="border border-gray-300 p-1.5 pl-3 rounded-sm outline-none focus:outline-none focus:border-green-600 focus:shadow-sm focus:shadow-green-400 transition-all duration-500 mb-5" required type="email" name="eamil" id="eamil" />

                    {/* ----------------- UserName  ---------------------- */}
                    {/* <label className="text-gray-500" htmlFor="username">Username</label>
                    <input onChange={(e) => setuserName(e.target.value)} value={userName} className="border border-gray-300 p-1.5 pl-3 rounded-sm outline-none focus:outline-none focus:border-green-600 focus:shadow-sm focus:shadow-green-400 transition-all duration-500 mb-5" required type="text" name="username" id="username" /> */}

                    {/* ----------------- create password  ---------------------- */}
                    <label className="text-gray-500 mb-2" htmlFor="password">Create Password</label>
                    <input onChange={(e) => setpassword(e.target.value)} value={password} className="border border-gray-300 p-1.5 pl-3 rounded-sm outline-none focus:outline-none focus:border-green-600 focus:shadow-sm focus:shadow-green-400 transition-all duration-500 " required type="password" name="password" id="password" />

                    {/* ----------------- confirm password  ---------------------- */}
                    {/* <label className="text-gray-500" htmlFor="confirmPassword">Confirm Password</label>
                    <input onChange={(e) => { setconfirmPassword(e.target.value); setpasswordMatch(password === confirmPassword) }} value={confirmPassword} className="border border-gray-300 p-1.5 pl-3 rounded-sm outline-none focus:outline-none focus:border-green-600 focus:shadow-sm focus:shadow-green-400 transition-all duration-500 mb-5" required type="password" name="confirmPassword" id="confirmPassword" />
                    <div className="-mt-4 text-red-500 px-2" >
                        {password === confirmPassword ? "" : "Password must match"}
                    </div> */}

                    {/* <label className="mt-3 mb-5" htmlFor="T&C"><input type="checkbox" name="T&C" required id="T&C" /> I agree to the <Link to={'/notFound'} className="underline text-blue-600" >Terms & Conditions</Link></label> */}

                    {/* ----------------- login ---------------------- */}
                    <p onClick={() => setSign("logIn")} className="text-right mt-2 mb-2" >Already have an Account? <Link to={`/user/${userType}/logIn`} className="text-blue-600" ></Link></p>

                    {/* ----------------- Sign up button ---------------------- */}
                    <input className="bg-black text-white text-[18px] hover:bg-green-500 py-1.5 mt-3 cursor-pointer transition-all duration-300" type="submit" value="Sign In" />

                </form>
            </div>
        </div>
    )
}
export default FarmerCreateAccount
