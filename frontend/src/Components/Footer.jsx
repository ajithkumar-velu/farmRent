import { useNavigate } from "react-router-dom"

const Footer = () => {

  const navigate = useNavigate()

  return (
    <div className="bg-gray-800" >

      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1.5fr] gap-14 my-10 text-sm mx-4 sm:mx-[10%] pt-7" >
        {/* --------------------- Left Section ------------------------ */}
        <div  >
          <p onClick={() => { navigate('/'); scrollTo(0, 0) }} className="text-3xl text-green-400 font-bold mb-5 cursor-pointer w-fit" >FarmRent</p>
          <p className="w-full sm:w-2/3 text-gray-300 leading-6">Agricultural equipment is essential for farmers. Rental services offer vehicles or truck-tractor trailers to help them access these tools.</p>
        </div>

        {/* --------------------- Center Section ------------------------ */}
        <div>
          <h1 className="text-xl font-medium mb-5 text-white" >COMPANY</h1>
          <ul className="flex flex-col text-gray-300 gap-2" >

            <li className="cursor-pointer" >HOME</li>
            <li className="cursor-pointer" >ABOUT US</li>
            <li className="cursor-pointer" >PRIVACY POLICY</li>
          </ul>
        </div>

        {/* --------------------- Right Section ------------------------ */}
        <div>
          <h1 className="font-medium text-xl mb-5 text-white" >GET IN TOUCH</h1>
          <ul className="flex flex-col gap-2 text-gray-300" >

            <li className="cursor-pointer" >+91 987-654-3210</li>
            <li className="cursor-pointer" >farmRent@gmail.com</li>
          </ul>
        </div>

      </div>
      {/* -----------------------  Copy Right------------------------ */}
      <div>
        <hr className="border-gray-500" />
        <p className="py-5 text-sm text-center text-gray-200" >© Copyright 2024 FarmRent - All Right Reserved.</p>
      </div>
    </div>

  )
}

export default Footer
