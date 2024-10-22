import { useContext } from 'react'
import { image } from '../assets/Assets'
import { AppContext } from '../Context/AppContext'
import { toast} from 'react-toastify'



const TopEquipment = () => {

    const { Machines, navigate, currency, token1 } = useContext(AppContext)
const handleOnClick = (id)=>{
    if (!token1) {
        scrollTo(0, 0)
        toast.warning("Login first")
        return 
    }
     navigate(`/machine/${id}`)
}



    return (
        <div className='flex flex-col items-center gap-2' >
            <h1 className='md:text-3xl w-2/3 text-center text-3xl font-medium' >Our most popular rentals</h1>
            <p className='text-sm sm:w-3/5 px-5 text-center my-3 ' >High-quality framing equipment, delivered right to your door.</p>

            <div className='grid mt-14 h-auto w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5' >
                {Machines.slice(0, 5).map((item, index) => (
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
                                    <button onClick={()=>handleOnClick(item._id)} className="px-7 py-2 mb-3 bg-primary text-white hover:rounded-full transition-all duration-500 ease-in-out" >BOOK NOW</button>
                                </div>
                    </div>
                ))}
            </div>
            <button onClick={() => navigate("/machines")} className='border-2 border-green-400 font-semibold rounded-lg  mt-10 px-10 py-4 hover:bg-green-400 hover:text-white transition-all duration-300' >More</button>
            
        </div>
    )
}

export default TopEquipment
