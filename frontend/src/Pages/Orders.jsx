import axios, { all } from 'axios';
import { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { AppContext } from '../Context/AppContext';
import { Title } from '../Components/Title';


const Orders = () => {

    const { backendUrl, token1, currency } = useContext(AppContext)
    const [orders, setOrders] = useState([])

    const getOrders = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/order/userOrders', { headers: { token1 } })

            if (response.data.success) {
                let allOrders = []
                response.data.orders.map((order) => {
                    order.item.map((item) => {
                        item['status'] = order.status
                        item['payment'] = order.payment
                        item['paymentMehtod'] = order.paymentMethod
                        item['date'] = order.date
                        item['amount'] = order.amount
                        item['bookedDate'] = order.bookedDate
                        allOrders.push(item)
                    })
                })
                setOrders(allOrders.reverse())
            }
            console.log(orders)
            console.log(response.data.orders)

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }
    
    useEffect(() => {
        getOrders()
    }, [])

    return (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:[9vw]' >

            <div className='flex text-2xl pt-7 mb-7' >
                <Title text1={"MY ORDERS"} />
            </div>
            {
                orders.map((item, index) => (
                    <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4' >
                        <div className='flex items-start gap-6 text-sm' >

                            <img className='w-16 sm:w-20' src={item.image[0]} alt="" />

                            <div>

                                <p className='sm:text-base font-medium' >{item.name}</p>
                                <p className='text-black' >Reservation date: <span className='text-gray-400' >{new Date(item.bookedDate).toLocaleDateString()}</span></p>
                                <div className='flex items-center gap-3 mt-1 text-base text-gray-700' >
                                    <p>{currency}{item.amount}</p>
                                    <p>License: <span className='text-gray-400' >{item.license}</span></p>
                                </div>
                                <p className='mt-1' >Date: <span className='text-gray-400' >{new Date(item.date).toDateString()}</span></p>
                                <p>Payment: <span className='text-gray-400' >{item.paymentMehtod}</span></p>
                            </div>
                        </div>
                        <div className='md:w-1/2 flex justify-between' >
                            <div className='flex items-center gap-2' >
                                <p className='min-w-2 h-2 rounded-full bg-green-500' ></p>
                                <p className='text-sm md:text-base' >{item.status}</p>
                            </div>
                            <button onClick={getOrders} className='border px-4 py-2 text-sm font-medium rounded-sm' >TRACK ORDER</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Orders
