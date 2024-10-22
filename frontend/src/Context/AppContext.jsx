/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
// import { Machines } from "../assets/Assets";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { toast } from "react-toastify";
export const AppContext = createContext()
// http://localhost:3000/api/machine/add

const AppContextProvider = (props) => {

    const currency = " ₹"
    const delivery_fee = 99
    const navigate = useNavigate()
    const [Machines, setMachines] = useState([])
    const [sign, setSign] = useState("logIn")
    const [userType, setUserType] = useState('Provider')
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [token1, setToken1] = useState(localStorage.getItem('token1')?localStorage.getItem("token1"):"")
    const [allMachines, setAllMachines] = useState([])
    const [allProviders, setAllProvider] = useState([])
    // const [farmersInfo, setfarmersInfo] = useState(()=>{
    //     const temp = localStorage.getItem("farmersInfo")
    //     return temp ? JSON.parse(temp) : []
    // })





    // useEffect(()=>{
    //     if (!localStorage.getItem("token1")) {
    //         return navigate(`/`)
    //     }

    //     if (token1) {

    //         if(localStorage.getItem('type') === "provider"){
    //             navigate('/add')
    //         }else{
    //             navigate('/')
    //         }
    //     }

    // }, [token1])


    const fetchAllMachines = async () => {
        // if(!token1){
        //     return null
        // }
        try {
            
            const response = await axios.get(backendUrl + "/api/machine/all", { headers: { token1 } })
            if (response.data.success) {
                setMachines(response.data.machines)
            }else{
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }



        // setAllProvider(response.data.machines)

        // response.data.allUsers.map(item=>item.machines.map(single=>datas.push(single)))
   
        
 

        // setAllMachines(response.data.allUsers.map(user=>user.filter()))

        
    }
    useEffect(() => {
        fetchAllMachines()
    }, [])
    



    const value = {
        Machines,
        // farmersInfo,
        backendUrl,
        navigate,
        sign,
        setSign,
        userType,
        setUserType,
        token1,
        setToken1,
        allProviders,
        currency,
        delivery_fee
    }

    return (
        <AppContext.Provider value={value} >
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider