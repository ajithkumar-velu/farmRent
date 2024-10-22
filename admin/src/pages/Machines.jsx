import axios from "axios"
import {  useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import { AppContext } from "../context/AppContext"


const Machines = () => {

    const { backendUrl, token2 } = useContext(AppContext)
    const [ allMachines, setAllMachines ] = useState([])

    const fetchMyMachines = async () => {
        try {
            const response = await axios.get( backendUrl +  "/api/machine/all", {headers: {token1: token2}})
            setAllMachines(response.data.machines);
            
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }


    useEffect(()=>{
        fetchMyMachines()
    }, [])

    const removeMachine = async (val)=>{
        try {            
            const response = await axios.post(backendUrl + '/api/machine/remove', {val}, {headers: {token1: token2}})
            if (response.data.success) {
                toast.success(response.data.message)
                await fetchMyMachines()
            } else {
                toast.error(response.data.message)
            }
            
        } catch (error) {
            console.log(error.message);
            toast.error(error)
        }
    }

    

  return (
    <div>
        <div className="grid lg:grid-cols-[0.4fr_1fr_2fr_0.7fr_1fr_1fr_1fr] md:grid-cols-[1fr_2fr_1fr_1fr_1fr] grid-cols-[1fr_2fr_1fr_1fr] items-center border-b px-3 py-2 mb-5 bg-slate-100" >
            <b className="text-center" >No.</b>
            <b>Image</b>
            <b className="hidden md:block" >Name</b>
            <b>Rent</b>
            <b className="hidden lg:block" >License No</b>
            <b className="hidden lg:block" >Category</b>
            <b className="text-center" >Remove</b>
        </div>
        {allMachines.map((item, index)=>(
            <div key={index} className="grid lg:grid-cols-[0.4fr_1fr_2fr_0.7fr_1fr_1fr_1fr] md:grid-cols-[1fr_2fr_1fr_1fr_1fr] grid-cols-[1fr_2fr_1fr_1fr] items-center mb-5 border px-3 py-2 hover:bg-slate-100"  >
                <p className="text-center" >{index+1}</p>
                <img className="w-16 sm:w-20" src={item.image} alt="" />
                <p className="hidden md:block" >{item.name}</p>
                <p>{item.rent}</p>
                <p className="hidden lg:block" >{item.license}</p>
                <p className="hidden lg:block" >{item.category}</p>
                <p onClick={()=>removeMachine(item._id)} className="text-center cursor-pointer hover:scale-150 hover:font-bold transition-all hover:text-red-600 " >X</p>
            </div>
        ))

        }
    </div>
  )
}

export default Machines
