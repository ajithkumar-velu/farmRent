import { image } from '../assets/Assets'

const BottomInfo = () => {
    return (
        <div className='mt-[70px]' >
            <p className='text-3xl mt-10 font-bold md:text-5xl text-center' >Farmers</p>
            <div className='flex flex-col md:flex-row justify-center gap-10 items-center' >

                <p className='md:w-[40%] px-8 md:px-0 text-zinc-500'>As a cutting-edge platform, our service offers farmers a smarter way to track and manage rented farm equipment. By streamlining the rental process and providing comprehensive tools, we empower farmers to save time, reduce costs, and maximize their agricultural yields. Our platform ensures transparency, efficiency, and reliability, enabling farmers to focus on what matters most: cultivating their land and achieving greater success.</p>
                <img className='md:h-[370px]' src={image.hero_right} alt="" />
            </div>
        </div>
    )
}

export default BottomInfo
