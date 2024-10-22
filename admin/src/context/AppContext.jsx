import { Children, createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


export const AppContext = createContext()
const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const naivgate = useNavigate()
    const [token2, setToken2] = useState(localStorage.getItem("token2")? localStorage.getItem("token2") : "")
    const currency = "₹"
    const value = {
        naivgate,
        token2,
        setToken2,
        backendUrl,
        currency
    }


    useEffect(()=>{
        localStorage.setItem("token2", token2)
    }, [token2])
    return (

        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>

    )
}

export default AppContextProvider