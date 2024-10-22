

import { useContext, } from "react"
import { AppContext } from "../Context/AppContext"



const UserLogin = () => {

    const { userType, setUserType } = useContext(AppContext)
    


    const handleUserType = () => {
        if (userType === "Provider") {
            setUserType("Farmer")
        } else {
            setUserType("Provider")
        }
    }
 

    return (
        <div>
            <div className="flex items-center justify-between px-[4%] py-3 bg-slate-100" >
                <p className="text-3xl font-medium text-primary" >FarmRent</p>
                <button onClick={handleUserType} className="px-8 py-2 text-white bg-primary rounded-full" >{userType === "Provider" ? "Farmer" : "Provider"}</button>
            </div>
            <hr />
            

        </div >
    )
}

export default UserLogin
