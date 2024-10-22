import { NavLink } from "react-router-dom"
import { assets } from "../assets/assets"

const Sidebar = () => {
    return (
        <div className="sm:w-[21%] w-[18%] min-h-screen border-r-2" >
            <div className="flex flex-col
       gap-4 pt-6 pl-[20%]  text-[15px]" >
                <NavLink to={'/'} className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" >
                    <img className="w-5 h-5" src={assets.add_icon} alt="" />
                    <p className="hidden sm:block" >Add</p>
                </NavLink>
                <NavLink to={'/machines'} className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" >
                    <img className="w-5 h-5" src={assets.order_icon} alt="" />
                    <p className="hidden sm:block" >Machines</p>
                </NavLink>
                <NavLink to={'/orders'} className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l" >
                    <img className="w-5 h-5" src={assets.all_orders_icon} alt="" />
                    <p className="hidden sm:block" >Orders</p>
                </NavLink>

            </div>
        </div>
    )
}

export default Sidebar
