import { image } from "../assets/Assets"
import Subscribe from "../Components/Subscribe"

const About = () => {
  return (
    <div className="mx-4 sm:mx-[10%]" >
      {/* ----------------- About us --------------- */}
      <div className="text-center text-2xl pt-10 text-gray-500" >
        <p>ABOUT <span className="text-gray-700 font-medium" >US</span></p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12" >
        <img className="w-full md:max-w-[360px]" src={image.about_image} alt="" />

        <div className="flex flex-col justify-center gap-5 md:w-2/4 text-sm text-gray-600" >
          <p>At FramRent, we believe that sustainable farming practices are essential for protecting our planet and ensuring a healthy future for generations to come. That&apos;s why we&apos;re committed to providing equipment that is environmentally friendly and energy-efficient.</p>
          <p>We prioritize the use of renewable energy sources whenever possible and encourage our customers to adopt sustainable farming practices. Our team is dedicated to educating farmers about the benefits of sustainable agriculture and providing them with the tools and resources they need to make a positive impact.</p>
          <b className="text-gray-800" >Our Vision</b>
          <p>Our vision is to be the leading provider of innovative farming equipment rental solutions, empowering farmers to achieve their full potential. We strive to create a sustainable future by offering reliable, affordable, and eco-friendly equipment that enhances productivity and efficiency. We aim to foster a strong sense of community among our customers and contribute to the overall well-being of the agricultural industry.</p>
        </div>
      </div>

      {/* ----------------- why choose us -------------- */}
      <div className="text-2xl my-4 text-gray-500" >
        <p>WHY <span className="uppercase text-gray-700 font-medium" >Choose Us</span></p>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 mb-20" >
        <div className="border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] hover:bg-green-400 hover:text-white cursor-pointer transition-all text-gray-600 duration-300" >
          <b>Wide Range of Equipment:</b>
          <p>We offer a comprehensive selection of equipment to suit your specific needs, including tractors, planters, harvesters, and more.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] hover:bg-green-400 hover:text-white cursor-pointer transition-all text-gray-600 duration-300" >
          <b>Flexible Rental Options:</b>
          <p>Whether you need equipment for a single day or an entire season, we have the right rental plan for you.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] hover:bg-green-400 hover:text-white cursor-pointer transition-all text-gray-600 duration-300" >
          <b>Expert Support:</b>
          <p>Our team is available to provide guidance, troubleshooting, and maintenance assistance.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 md:py-16 flex flex-col gap-5 text-[15px] hover:bg-green-400 hover:text-white cursor-pointer transition-all text-gray-600 duration-300" >
          <b>Competitive Pricing: </b>
          <p>We offer competitive rates without compromising on quality.</p>
        </div>
      </div>
      <Subscribe/>

    </div>
  )
}

export default About
