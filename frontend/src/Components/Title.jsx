
export const Title = ({text1}) => {
  return (
    <div className=" md:justify-center text-gray-500 font-semibold flex items-center gap-2 my-3" >
        <p className="min-w-[50px] h-0.5 bg-gray-500" ></p>
        <p className="font-2xl font-semibold" >{text1}</p>
        <p className="min-w-[50px] h-0.5 bg-gray-500" ></p>
    </div>
  )
}
