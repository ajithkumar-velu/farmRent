import { image } from "../assets/Assets"

const OurPolicy = () => {
  return (
    // <div className="flex flex-col sm:flex-row justify-around items-center text-center gap-12 sm:gap-2 py-20 text-xs sm:text-sm md:text-base text-gray-700" >
        <div className="grid gap-12 sm:gap-12 sm:grid-cols-2 lg:grid-cols-4 py-20 text-xs sm:text-sm md:text-base text-gray-700 text-center items-center" >

        <div className="" >
            <img className="w-14 m-auto mb-5" src={image.customer_support} alt="" />
            <b className="font-semibold" >Best customer support</b>
            <p className="text-gray-400" >We provide 24/7 customer support</p>
        </div>
        <div className="" >
            <img className="w-14 m-auto mb-5" src={image.payment_policy} alt="" />
            <b className="font-semibold" >Payment Policy</b>
            <p className="text-gray-400" >We provide secure payment method.</p>
        </div>
        <div className="" >
            <img className="w-14 m-auto mb-5" src={image.cancelation_icon} alt="" />
            <b className="font-semibold" >Cancellation Policy</b>
            <p className="text-gray-400" >We provide easy canellation policy</p>
        </div>
        <div className="" >
            <img className="w-14 m-auto mb-5" src={image.privacy_policy} alt="" />
            <b className="font-semibold" >Privacy Policy</b>
            <p className="text-gray-400" >We protect your personal information.</p>
        </div>
        </div>
    // </div>
  )
}

export default OurPolicy
