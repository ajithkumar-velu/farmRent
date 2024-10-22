import { useContext } from 'react'
import { categories } from '../assets/Assets'
import { Link } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import {toast} from 'react-toastify'

const Categories = () => {
    const { token1, navigate} = useContext(AppContext)
    const handleCategoryNavigate = (name)=>{
        if(!token1){
            toast.warning("Login first")
            scrollTo(0, 0)
            return null
        }
        navigate(`/machines/${name}`)
    }
    return (
        <div className="flex flex-col items-center gap-4 py-16 text-gray-800" id="speciality" >
            <h1 className='text-3xl font-medium' >Find the Agri Equipment for you</h1>
            <p className="sm:w-2/3 text-center text-sm" >Agricultural Equipment is a vehicle or truck-tractor trailer are provide for rental to Farmers for farming business and used exclusively in agricultural operations to transport agricultural products.</p>
            <div>


                {/* <div className="flex gap-4 pt-5 w-full overflow-x-scroll" > */}
                <div className="grid grid-cols-1 sm:grid-cols-6 gap-5 mt-10" >
                    {categories.map((item, index) => (
                        <div  onClick={() => handleCategoryNavigate(item.name)} className="flex flex-col items-center text-xs box-content-border cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500" key={index}  >
                            
                            <img className="w-36 sm:w-24 mb-2 rounded-full p-1 border-gray-600 border-4 " src={item.image} alt="" />

                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Categories
