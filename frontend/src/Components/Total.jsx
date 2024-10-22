import { useContext } from "react"
import { Title } from "./Title"
import { AppContext } from "../Context/AppContext"

const Total = ({rent}) => {
    const { currency, delivery_fee } = useContext(AppContext)
  return (
    <div className="w-full" >
        <Title text1={"CART TOTAL"} />
        <div className="flex flex-col gap-2 text-sm" >
            <div className="flex justify-between" >
                <p>Subtotal</p>
                <p>{currency}{rent}.00</p>
            </div>
            <hr />
        
            <div className="flex justify-between" >
                <p>Delivery Fee</p>
                <p>{currency}{delivery_fee}.00</p>
            </div>
            <hr />

            <div className="flex justify-between" >
                <b>Total</b>
                <b>{currency}{rent + delivery_fee}.00</b>
            </div>
            
        </div>
    </div>
  )
}

export default Total
