import { useState } from "react"
import { toast } from 'react-toastify'
import axios from 'axios'
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { useEffect } from "react"
import { assets } from "../assets/assets"

const Orders = () => {

  const [orderData, setOrderData] = useState([])
  const { backendUrl, token2, currency } = useContext(AppContext)

  const fetchOrderData = async () => {
    try {

      const response = await axios.get(backendUrl + "/api/order/list", { headers: { token1: token2 } })
      if (response.data.success) {

        setOrderData(response.data.orders.reverse())
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const statusHandler = async (event, orderId) =>{
    if (event.target.value === "Delivered") {
      toast.success("true")
      try {
        const response = await axios.post(backendUrl + '/api/order/paymentDone', {orderId}, {headers: {token1: token2}})
        if (response.data.success) {
          await fetchOrderData()
        }
      } catch (error) {
        console.log(error);
        toast.error(error.message)
      }
    }
    try {

        const response = await axios.post(backendUrl + '/api/order/status', {orderId, status: event.target.value}, {headers: {token1: token2}})
        if(response.data.success){
            await fetchOrderData()
            toast.success(response.data.message)
        }
        
        
        
    } catch (error) {
        console.log(error);
        toast.error(error.message)
    }
}

  useEffect(() => {
    fetchOrderData()
    console.log(orderData);

  }, [])
  return (
    <div>
      <div className="flex gap-2 items-center mb-10" >
        <p className=" sm:w-[100px] h-0.5 bg-black" ></p>
        <p className=" font-semibold" >ALL ORDERS</p>
        <p className="w-[60px]  h-0.5 bg-black" ></p>
        <p></p>
      </div>
      <div>

        {
          orderData.map((order, index) => (
            <div key={index} className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700" >

              <img className="w-16 border-2 p-2" src={assets.vehucle_icon} alt="" />
              <div>
                <div>
                  {order.item.map((item1, index1) => (
                    <div key={index1} className="py-0.5" >
                      {item1.name}
                    </div>
                  ))}
                </div>
                
                <p className="mt-3 mb-2 font-medium" >{order.address.firstName} {order.address.lastName}</p>
                <div>
                  <p>{order.address.doorNo}, {order.address.street}</p>
                  <p>{order.address.city}, {order.address.state}, {order.address.zipcode}</p>
                </div>
                <p>Phone: <span>{order.address.phone}</span></p>
              </div>
              <div>
                <p className="mt-1" >Method: <span>{order.paymentMethod}</span></p>
                <p>Payment: {order.payment ? "Done" : "Pending"}</p>
                <p>Date: {new Date(order.bookedDate).toLocaleDateString()}</p>
              </div>
              <p className="text-sm sm:text-[15px]" >{currency}{order.amount}</p>
              <select onChange={(event)=>statusHandler(event, order._id)} value={order.status} className="p-2 font-semibold border-2" >
                <option value="Order Placed">Order Placed</option>
                <option value="Order Confirmd">Order Confirmd</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
                <option value="Ready to be pickup">Ready to be pickup</option>
              </select>
            </div>

          ))
        }
      </div>

    </div>
  )
}

export default Orders
