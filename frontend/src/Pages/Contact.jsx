import { image } from "../assets/Assets"
const Contact = () => {
  return (
    <div className="mx-4 sm:mx-[10%]" >
      
      <div className="text-gray-500 text-2xl text-center pt-10" >
        <p>CONTACT <span className="text-gray-700 font-semibold" >US</span></p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-16 mb-10 text-sm" >

        <img className="w-[90%] md:max-w-[420px] mb-[-100px] md:mb-0" src={image.contact_image1} alt="" />

        <div className="flex flex-col justify-center items-start gap-5"  >
          <p className="font-semibold text-lg text-gray-600" >OUR OFFICR</p>
          <p className="text-gray-500" >01, 2nd floor, <br />3rd main road, New yark, USA</p>
          <p className="text-gray-500" >Phone: +1 234 567 8901 <br /> Email: framrent@gmail.com</p>
          <p className="font-semibold text-lg text-gray-600" >Careers at FRAMRENT</p>
          <p className="text-gray-600" >Learn more about teams and jobs openings.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500" >Explote Jobs</button>
        </div>
      </div>

    </div>
  )
}

export default Contact
