/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AppContext } from "../Context/AppContext";


const MachineItem = ({ relatedMachines }) => {
    const { navigate } = useContext(AppContext)
    console.log(relatedMachines);
    
    return (
        <div>
        <div className='grid mt-14 h-auto w-full grid-cols-auto lg:grid-cols-5 gap-5' >
            {relatedMachines.slice(0, 5).map((item, index) => (
                <div onClick={() => navigate(`/machine/${item._id}`)} key={index} className='p-5 mx-auto sm:max-w-[320px]  hover:scale-105 transition-all duration-300 cursor-pointer h-full bg-zinc-50 border-gray-400 border rounded-lg overflow-hidden hover:shadow-2xl shadow-gray-700' >
                    <div className="overflow-hidden" >

                    <img src={item.image} className='h-[50%] rounded-t-xl w-full hover:scale-125 transition-all duration-300' alt="" />
                    </div>
                    <div >

                        <p className='flex items-center justify-between my-3' >
                            <p className='font-bold text-sm text-gray-600' >{item.name}</p>
                            <p className='text-[13px] font-semibold text-zinc-600' >{item.license}</p>
                        </p>
                        <p className='text-2xl font-semibold' >${item.rent}</p>
                        <p className='pb-5 md:pb=10 text-zinc-500 text-sm mt-4' >{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
        </div>

    )
}

export default MachineItem
