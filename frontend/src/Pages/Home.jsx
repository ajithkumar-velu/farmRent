import BottomInfo from '../Components/BottomInfo'
import Categories from '../Components/Categories'
import Header from '../Components/Header'
import OurPolicy from '../Components/OurPolicy'
import Subscribe from '../Components/Subscribe'
import TopEquipment from '../Components/TopEquipment'


const Home = () => {
  return (
    <div>
      <div className='mx-4 sm:mx-[10%]' >

        <Header />
        <Categories />
        <TopEquipment />
        <OurPolicy />
        <BottomInfo />
        <Subscribe />
      </div>

    </div>
  )
}

export default Home
