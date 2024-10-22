import { useContext, useState } from "react"
import { assets } from "../assets/assets"
import axios from 'axios'
import { toast } from "react-toastify"
import { AppContext } from "../context/AppContext"
import { useEffect } from "react"

const Add = () => {

    const { backendUrl, token2 } = useContext(AppContext)
    const [image, setImage] = useState(false)
    const [name, setName] = useState('')
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [licNum, setLicNum] = useState("")
    const [rent, setRent] = useState("")
    const [phone, setPhone] = useState("")
    const token1 = token2

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {

            const formData = new FormData();
            formData.append('name', name);
            formData.append('description', description)
            formData.append('category', category)
            formData.append("license", licNum)
            formData.append("rent", rent)
            formData.append("phone", phone)
            image && formData.append('image', image)

            console.log(formData);


            const response = await axios.post(backendUrl + "/api/machine/add", formData, { headers: { token1 } })
            console.log(response);

            if (response.data.success) {
                toast.success(response.data.message)
                setName('')
                setDescription("")
                setCategory("")
                setLicNum("")
                setRent("")
                setPhone("")
                setImage(false)

            }

        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }
    useEffect(()=>{
        console.log(phone);
        
    })


    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-3" >
            <div className="flex" >

                <div>

                    <p className="mb-2" >Upload image</p>
                    <label htmlFor="image">
                        <img className="w-32 h-20 cursor-pointer" src={!image ? assets.upload_area : URL.createObjectURL(image)} alt="" />
                        <input onChange={(e) => setImage(e.target.files[0])} className="hidden" type="file" id="image" required />
                    </label>
                </div>
            </div>
            <div className="w-full" >
                <p>Name</p>
                <input onChange={e => setName(e.target.value)} value={name} className="px-3 py-2 w-full max-w-[500px] border" placeholder="Type here" type="text" required />
            </div>
            <div className="w-full" >
                <p>Description</p>
                <textarea onChange={e => setDescription(e.target.value)} value={description} className="w-full px-3 border py-2 max-w-[500px]" placeholder="Write description" required></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-8 mb-2" >
                <div>
                    <p className="mb-2" >Category</p>
                    <select onChange={e => setCategory(e.target.value)} value={category} className="w-full border sm:w-[180px] px-3 py-2" >
                        <option value="">Select</option>
                        <option value="Tractor">Tractor</option>
                        <option value="Harvester">Harvester</option>
                        <option value="Seeder">Seeder</option>
                        <option value="Tilage">Tilage</option>
                        <option value="Advance">Advance</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <div>

                    <p className="mb-2" >Licsence number</p>
                    <input onChange={e => setLicNum(e.target.value)} value={licNum} className="px-3 py-2 border w-full sm:w-[120px]" type="text" placeholder="TN 1234AN" required />
                </div>

                <div>
                    <p className="mb-2" >Rent Per/Day</p>
                    <input onChange={e => setRent(e.target.value)} value={rent} className="px-3 border py-2 w-full sm:w-[120px]" type="number" placeholder="2300" required />
                </div>
            </div>
                <div className="w-[300px]" >
                    <p>Phone</p>
                    <input onChange={e => setPhone(e.target.value)} value={phone} className="px-3 border py-2 w-full max-w-[500px]" placeholder="Type Phone number" type="number" required />
                </div>
            <button className="w-28 bg-primary text-white py-2" >Add</button>
        </form>
    )
}

export default Add
