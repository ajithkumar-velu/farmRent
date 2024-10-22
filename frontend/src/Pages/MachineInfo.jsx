
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { AppContext } from "../Context/AppContext";
import MachineItem from "../Components/MachineItem.jsx";
import { image } from '../assets/Assets'
import Total from "../Components/Total.jsx";
import { Title } from "../Components/Title.jsx";
import Payment from "../Components/Payment.jsx";
import { toast } from "react-toastify";
import axios from "axios";



const MachineInfo = () => {

  // const [firstName, setFirstName] = useState("")
  // const [lastName, setLastName] = useState("")
  // const [email, setEmail] = useState("")
  // const [street, setStreet] = useState("")
  // const [doorNo, setDoorNo] = useState("")
  // const [city, setCity] = useState("")
  // const [state, setState] = useState("")
  // const [zipcode, setZipcode] = useState("")
  // const [phone, setPhone] = useState("")


  const [rentalDate, setRentalDate] = useState()
  const [relatedMachines, setRelatedMachines] = useState([])
  // const [bookedInfo, setBookedInfo] = useState({name: })

  const { macId } = useParams()
  const { Machines, backendUrl, token1, delivery_fee, navigate } = useContext(AppContext)
  const [bookedDate, setBookedDate] = useState(null);
  const [method, setMethod] = useState("COD")

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    doorNo: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
    bookedDate
  })
  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const today = new Date();

    if (selectedDate >= today) {
      setBookedDate(selectedDate);

    } else {
      // alert('Please select a future date.');
      toast.warning("Select currect date")
    }
  };

  const relatedMachinesData = () => {

  }
  useEffect(() => {
    let d = new Date()
    console.log(d);

  })
  const [MachineInfo, setMachineInfo] = useState(null)
  const fetchData = async () => {
    const MachineInfo = Machines.find(mac => mac._id === macId)
    const data = Machines.filter(item => item.category === MachineInfo.category)
    setRelatedMachines(data)

    console.log(MachineInfo);

    setMachineInfo(MachineInfo)
  }
  useEffect(() => {
    fetchData()
    relatedMachinesData()
  }, [macId, Machines])


  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData(prev => ({ ...prev, [name]: value }))
    console.log(formData);

  }

  const getAmount = () => {
    return MachineInfo.rent + delivery_fee
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(formData);


    try {

      let orderData = {
        address: formData,
        bookedDate: bookedDate,
        item: MachineInfo,
        amount: getAmount()
      }

      switch (method) {


        case 'COD':
          {
            const response = await axios.post(backendUrl + "/api/order/place", orderData, { headers: { token1 } })
            console.log(response.data);
            if (response.data.success) {
              toast.success(response.data.message)
              navigate('/orders')
            } else {
              toast.error(response.data.message)
            }
          break;}
          case 'stripe':
            // {
            //   const responseStripe = await axios.post(backendUrl + '/api/order/stripe', orderData, {headers: {token1}})
            //   if (responseStripe.data.success) {
            //     const { session_url } = responseStripe.data
            //     window.location.replace(session_url)
            //   } else {
            //     toast.error(responseStripe.data.message)
            //   }

            // break;}
            toast.warning("Stripe is disabled")
            break;

            default:
              break;
      }


    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }
  // useEffect(()=>{

  // }, [handleSubmit])

  // const findProviderName = ()=>{
  //   const data = allProviders.filter(provider=>provider.machines.find(item=>item.id  === macId))
  //   setProviderInfo(data)

  // }


  // useEffect(()=>{
  //   // console.log(rentalDate);
  //   // console.log(Machines[28].id);
  //   // console.log(allProviders[2].machines.find(item=>item.id===Machines[28].id));
  //   // console.log(macId);

  //   findProviderName()
  //   // console.log(providerInfo[0].name);

  // }, [macId, MachineInfo])




  return MachineInfo && (
    <div className="mx-4 sm:mx-[10%] mb-[120px]" >
      <div>

        <p className="text-center text-3xl pt-10 font-bold" >MACHINE INFO</p>
        <div className="flex flex-col md:flex-row gap-10 justify-center mt-16">
          <div>
            <img className="w-full md:max-w-[380px]" src={MachineInfo.image} alt="" />
          </div>
          <div className="gap-10 flex flex-col" >
            <div className="flex flex-col max-w-[1200px] md:max-w-[600px] text-gray-400 gap-6 text-sm" >
              {/* <p className="text-xl font-semibold text-gray-900 mb-3" >VEHICLE <span className="text-gray-400 font-normal" >INFO</span></p> */}
              {/* <p className="text-gray-600 font-semibold grid grid-cols-[1fr_0.3fr_4fr]" >Provider Name<span>:</span><span className="text-gray-400  font-semibold" >{providerInfo[0].name}</span></p> */}
              <p className="text-gray-600 md:text-[15px] font-semibold grid grid-cols-[1fr_0.3fr_4fr]" >Vehicle Name<span>:</span><span className="text-gray-400  font-semibold flex md:text-[15px] items-center" > <p className="text-[17px] mr-1 ml-1" >{MachineInfo.name} </p>
                <div className="flex justify-center items-center gap-2" >
                  (<p className="" >3.8 Review</p>
                  <span className="flex gap-0.5" >
                    <img className="w-4 h-4" src={image.star_icon} alt="" />
                    <img className="w-4 h-4" src={image.star_icon} alt="" />
                    <img className="w-4 h-4" src={image.star_icon} alt="" />
                    <img className="w-4 h-4" src={image.star_icon} alt="" />
                    <img className="w-4 h-4" src={image.star_dull_icon} alt="" />
                  </span>)
                </div>


              </span>

              </p>
              <p className="text-gray-600 font-semibold grid grid-cols-[1fr_0.3fr_4fr] sm:text-[17px]" >Type<span>:</span><span className="text-gray-400  font-semibold sm:text-[17px]" >{MachineInfo.category}</span></p>
              <p className="text-gray-600 font-semibold grid grid-cols-[1fr_0.3fr_4fr] sm:text-[17px]" >Rent Cost<span>:</span><span className="text-gray-400  font-semibold sm:text-[17px]" >₹{MachineInfo.rent} / Day</span></p>
              <p className="text-gray-600 font-semibold grid grid-cols-[1fr_0.3fr_4fr] sm:text-[17px]">Spec<span>:</span><span className=" text-gray-400 font-semibold md:w-2/3 sm:text-[17px]" >{MachineInfo.description}</span></p>
              <p className="text-gray-600 font-semibold grid grid-cols-[1fr_0.3fr_4fr] sm:text-[17px]" >License <span>:</span><span className="text-gray-400  font-semibold sm:text-[17px]" >{MachineInfo.license}</span></p>
              <p className="text-gray-600 font-semibold grid grid-cols-[1fr_0.3fr_4fr] sm:text-[17px]" >Phone <span>:</span><span className="text-gray-400  font-semibold sm:text-[17px]" ></span></p>
            </div>
          </div>
        </div>
        <div className="flex my-7" >

          {/* <button className="m-auto bg-black text-white px-8 py-3 hover:rounded-full transition-all duration-300" >BOOK NOW</button> */}
        </div>
        <hr className="h-0.5 bg-black" />
        {/* <form onSubmit={()=>navigate('/')} className="flex flex-col mt-10 w-full  text-gray-400 gap-6 text-sm border p-10 border-gray-500" >
          <p className="text-xl font-semibold text-gray-900 " >PROVIDER <span className="text-gray-400 font-normal" >INFO</span></p>
          <p className="grid  grid-cols-[1fr_0.3fr_4fr] text-gray-600  font-semibold" >Name <span>:</span> <span className="text-gray-400 font-semibold">{MachineInfo.providerName}</span></p>
          <p className="grid grid-cols-[1fr_0.3fr_4fr] text-gray-600  font-semibold" >Address <span>:</span> <span className="text-gray-400 font-semibold" >{MachineInfo.address.line1} <br />{MachineInfo.address.line2}</span></p>
          <p className="grid grid-cols-[1fr_0.3fr_4fr] text-gray-600  font-semibold" >Phone <span>:</span> <span className="text-gray-400 font-semibold" >{MachineInfo.phone}</span></p>
          <p className="grid grid-cols-[1fr_0.3fr_4fr] text-gray-600  font-semibold" >Email <span>:</span> <span className="text-gray-400 font-semibold" >{MachineInfo.email}</span></p>
          <p className="grid grid-cols-[1fr_0.3fr_4fr] text-gray-600  font-semibold" >Required Date <span>:</span> <span className="text-gray-700 font-semibold" ><input onChange={(e)=>setRentalDate(e.target.value)} value={rentalDate} className="border cursor-pointer border-gray-800 px-3" type="date" name="req_date" required id="" /></span></p>
          
          <input type="submit" className="self-start text-gray-950 px-10 py-4 border border-gray-500 hover:bg-black hover:text-white transition-all duration-500 mt-5" value="Book" />
        </form> */}


        {/* <p className="text-3xl text-gray-500 font-semibold my-5 text-center" >Related Machines</p>

        <MachineItem relatedMachines={relatedMachines} /> */}

        <form onSubmit={handleSubmit} className="lg:flex gap-5 lg:justify-between pt-5" >


          <div className="flex-1 max-w-[850px] md:mt-10 lg:mt-0" >
            {/* <p className="text-3xl text-gray-500 font-semibold flex items-center gap-2 my-3" >DELIVERY INFORMATION <span className="w-52 h-0.5 bg-gray-500 block" ></span></p> */}

            <div className="text-2xl mb-7" >
              <Title text1={"DELIVERY INFORMATION"} />
            </div>
            <div className="flex flex-col gap-4 w-full sm:max-[480px]" >
              <div className="flex gap-3" >

                <input onChange={onChangeHandler} required className="border-2 text-gray-600 rounded w-full px-3.5 py-1.5 border-gray-300" type="text" name="firstName" placeholder="Firstname" />
                <input onChange={onChangeHandler} required className="border-2 text-gray-600 rounded w-full px-3.5 py-1.5 border-gray-300" type="text" name="lastName" placeholder="Lastname" />
              </div>
              <input onChange={onChangeHandler} required className="border-2 text-gray-600 rounded w-full px-3.5 py-1.5 border-gray-300" type="email" name="email" placeholder="Email address" />
              <input onChange={onChangeHandler} required className="border-2 text-gray-600 rounded w-full px-3.5 py-1.5 border-gray-300" type="text" name="street" placeholder="Street" />
              <div className="flex gap-3" >

                <input onChange={onChangeHandler} required className="border-2 text-gray-600 rounded w-full px-3.5 py-1.5 border-gray-300" type="text" name="doorNo" placeholder="Door No." />
                <input onChange={onChangeHandler} required className="border-2 text-gray-600 rounded w-full px-3.5 py-1.5 border-gray-300" type="text" name="city" placeholder="City" />
              </div>
              <div className="flex gap-3" >
                <input onChange={onChangeHandler} required className="border-2 text-gray-600 rounded w-full px-3.5 py-1.5 border-gray-300" type="text" name="state" placeholder="State" />

                <input onChange={onChangeHandler} required className="border-2 text-gray-600 rounded w-full px-3.5 py-1.5 border-gray-300" type="number" name="zipcode" placeholder="Zipcode" />
              </div>
              <div className="flex gap-3" >

                <input onChange={onChangeHandler} required className="border-2 text-gray-600 rounded w-full px-3.5 py-1.5 border-gray-300" type="number" name="phone" placeholder="Phone" />
                <input onChange={handleDateChange} required value={bookedDate ? bookedDate.toISOString().slice(0, 10) : ''} className="border-2 text-gray-600 rounded w-full px-3.5 py-1.5 border-gray-300" type="date" name="dateOfDelivery" />

              </div>
            </div>
          </div>

          <div>

            <div className="md:flex lg:flex-col md:justify-between md:flex-row-reverse md:mt-10 lg:mt-0 mt-10" >

              <div className="max-w-[450px] text-2xl" >
                <Total rent={MachineInfo.rent} />
              </div>


              <div className="max-w-[450px] mt-10 sm:mt-0 lg:mt-10" >
              <div className='text-xl mb-3' >
                <Title text1={"PAYMENT MEDTHOD"} />
            </div>
            <div className='flex flex-col gap-3' >

                <div className='flex items-center gap-5 border px-7 py-1.5' >
                    <p onClick={() => setMethod("COD")} className={`w-4 h-4 border rounded-full cursor-pointer ${method === "COD" ? "bg-primary" : ""} `} ></p>
                    <p>CASH ON DELIVERY</p>
                </div>
                <div className='flex items-center gap-5 border px-7 py-1.5' >
                    <p onClick={() => setMethod("stripe")} className={`w-4 h-4 border cursor-pointer rounded-full ${method === "stripe" ? "bg-primary" : ""}`} ></p>
                    <p><img className='w-[110px]' src={image.razorpay_logo} alt="" /></p>
                </div>
            </div>
              </div>


            </div>
            <div>
              <div className="flex items-center justify-end mt-8" >

                <button type="submit" className="px-10 py-2.5 bg-yellow-500 font-semibold" >PLACE ORDER</button>
              </div>

            </div>
          </div>
        </form>

        {/* <div>
          <label htmlFor="dateInput">Select a future date:</label>
          <input
            type="date"
            id="dateInput"
            value={selectedDate ? selectedDate.toISOString().slice(0, 10) : ''}
            onChange={handleDateChange}
          />
        </div> */}

      </div>
    </div>
  )
}

export default MachineInfo
