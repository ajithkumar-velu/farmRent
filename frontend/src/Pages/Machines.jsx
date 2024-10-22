import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../Context/AppContext";
import { image } from '../assets/Assets'
import { toast } from 'react-toastify'

const Machines = () => {

    const machineCategorie = useParams()
    const [inp, setInp] = useState("")
    const [filteredMachines, setFilteredMachines] = useState()
    const navigate = useNavigate();



    const { Machines, currency, token1 } = useContext(AppContext)


    const fetchData = () => {
        if (machineCategorie.category) {
            setFilteredMachines(Machines.filter(mac => mac.category === machineCategorie.category))

            console.log('run');

        } else {

            setFilteredMachines(Machines)
        }
    }
    const fetcSearch = () => {
        if (inp) {

            setFilteredMachines(Machines.filter(mac => mac.name.toUpperCase().indexOf(inp.toUpperCase()) > -1))
        } else {
            setFilteredMachines(Machines)
        }
    }

    useEffect(() => {
        fetcSearch()
    }, [inp])
    useEffect(() => {
        console.log(filteredMachines)
        fetchData()

    }, [machineCategorie.category, Machines])

    const HandleNavigate = (id) =>{
        if(!token1){
            toast.warning("Login first")
            navigate("/")
            return null
        }
        navigate(`/machine/${id}`)
        
    }


    return filteredMachines && (
        <div className="mx-[10px] my-[100px]" >
            <div className="flex justify-center text-lg p-3 items-center px-10" ><input onChange={(e) => setInp(e.target.value)} value={inp} className="border border-gray-400 p-2 md:w-[60%] lg:w-[40%] w-full pl-10 rounded-full" type="text" placeholder="Search..." /></div>

            <p className="text-gray-600 pl-10 font-semibold text-center mt-10 sm:mt-0 sm:text-left" >Browse throught the categories</p>

            <div className="flex flex-col sm:flex-row items-start gap-5 mt-5 px-10 w-screen">

                <div className="text-sm flex flex-col gap-4 text-gray-600 " >
                    <p onClick={() => machineCategorie.category === "Tractor" ? navigate('/machines') : navigate("/machines/Tractor")} className={`w-[80vw] sm:w-auto pl-3 py-1.5 pr-28 border border-gray-300 rounded transition-all cursor-pointer ${machineCategorie.category === "Tractor" ? "bg-green-200 text-black" : "bg-white"}`} >Tractors</p>
                    <p onClick={() => machineCategorie.category === "Harvester" ? navigate("/machines") : navigate("/machines/Harvester")} className={`w-[80vw] sm:w-auto pl-3 py-1.5 pr-28 border border-gray-300 rounded transition-all cursor-pointer hover:bg-green-200 ${machineCategorie.category === "Harvester" ? "bg-green-200 text-black" : "bg-white"}`} >Harvesting</p>
                    <p onClick={() => machineCategorie.category === "Seeder" ? navigate("/machines") : navigate("/machines/Seeder")} className={`w-[80vw] sm:w-auto pl-3 py-1.5 pr-28 border border-gray-300 rounded transition-all cursor-pointer hover:bg-green-200 ${machineCategorie.category === "Seeder" ? "bg-green-200 text-black" : "bg-white"}`} >Seeding</p>
                    <p onClick={() => machineCategorie.category === "Tilage" ? navigate("/machines") : navigate("/machines/Tilage")} className={`w-[80vw] sm:w-auto pl-3 py-1.5 pr-28 border border-gray-300 rounded transition-all cursor-pointer hover:bg-green-200 ${machineCategorie.category === "Tilage" ? "bg-green-200 text-black" : "bg-white"}`} >Tilage</p>
                    <p onClick={() => machineCategorie.category === "Advance" ? navigate("/machines") : navigate("/machines/Advance")} className={`w-[80vw] sm:w-auto pl-3 py-1.5 pr-28 border border-gray-300 rounded transition-all cursor-pointer hover:bg-green-200 ${machineCategorie.category === "Advance" ? "bg-green-200 text-black" : "bg-white"}`} >Advance</p>
                    <p onClick={() => machineCategorie.category === "Others" ? navigate("/machines") : navigate("/machines/Others")} className={`w-[80vw] sm:w-auto pl-3 py-1.5 pr-28 border border-gray-300 rounded transition-all cursor-pointer hover:bg-green-200 ${machineCategorie.category === "Others" ? "bg-green-200 text-black" : "bg-white"}`} >Others</p>
                </div>

                {filteredMachines.length > 0 ?
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 lg:gap-7 gap-y-6 ' >
                        {filteredMachines.map((item, index) => (
                            <div key={index} className='border rounded-t-xl px-3 py-2 bg-slate-50  cursor-pointer sm:max-w-[300px] hover:scale-105 transition-all duration-300 shadow-lg' >
                                <div className="overflow-hidden" >

                                    <img src={item.image} className='h-[50%] rounded-t-xl w-full border-b hover:scale-125 trasnition duration-300 ease-in-out' alt="" />
                                </div>

                                <div className="flex flex-col items-center justify-center gap-5" >
                                    <div>
                                        <p className="text-xl text-center capitalize text-gray-900 mt-3" >{item.name}</p>
                                        <div className="flex justify-center text-lg items-center gap-2" >
                                            <p className="" >3.8 Review</p>
                                            <span className="flex gap-0.5" >
                                                <img className="w-4 h-4" src={image.star_icon} alt="" />
                                                <img className="w-4 h-4" src={image.star_icon} alt="" />
                                                <img className="w-4 h-4" src={image.star_icon} alt="" />
                                                <img className="w-4 h-4" src={image.star_icon} alt="" />
                                                <img className="w-4 h-4" src={image.star_dull_icon} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-xl font-medium text-gray-700 bg-stone-100" >{currency}{item.rent}.00/Day</p>
                                    <button onClick={() => HandleNavigate(item._id)} className="px-7 py-2 mb-3 bg-primary text-white hover:rounded-full transition-all duration-500 ease-in-out" >BOOK NOW</button>
                                </div>
                                {/* <div >

                                <p className='flex items-center justify-between my-3' >
                                    <p className='font-bold text-sm text-gray-600' >{item.name}</p>
                                    <p className='text-xs font-semibold text-zinc-600' >{item.license}</p>
                                </p>
                                <p className='text-2xl font-semibold' >${item.rent}</p>
                                <p className=' text-zinc-500 text-sm mt-4' >{item.description}</p>
                            </div> */}
                            </div>
                        ))}
                    </div>
                    :
                    <div className="text-center text-5xl text-gray-600 mx-auto" >No Data Found</div>
                }
            </div>
        </div>
    )
}

export default Machines
