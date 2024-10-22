import { useContext } from "react"
import { image } from "../assets/Assets"
import { AppContext } from "../Context/AppContext"
const Header = () => {
  const { navigate, token1 } = useContext(AppContext)
  return (
    <div id="hero" className="items-center md:pl-0 pl-8 w-full h-[80vh] bg-no-repeat flex flex-col justify-center gap-4 bg-left sm:bg-center bg-cover rounded-2xl mt-[120px]">
        <p className="text-5xl md:text-7xl text-white font-bold w-4/5 text-center" ><span className="text-green-400" >Frame Your World</span> with Ease </p>
        <p className="text-3xl md:text-4xl mb-8 text-white font-bold w-4/5 text-center" >Rent, Don&apos;t Own: Framing <span className="text-green-400" >Equipment Made Simple.</span></p>
        {
          !token1
          ?<a onClick={()=>navigate("/login")} className="px-8 flex gap-2 text-white font-mono rounded-lg py-3 bg-green-400 hover:scale-105 transition-all duration-300 cursor-pointer" >Login Now <img src={image.arrow_icon} alt="" /> </a>
          :<a onClick={()=>navigate("/machines")} className="px-8 flex gap-2 text-white font-mono rounded-lg py-3 bg-green-400 hover:scale-105 transition-all duration-300 cursor-pointer" >Rent Now <img src={image.arrow_icon} alt="" /> </a>
        }
        
    </div>
  )
}

export default Header
