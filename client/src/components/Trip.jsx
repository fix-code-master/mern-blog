import './TripStyles.css'
import TripData from './TripData'
import News1 from '../assets/news1.jpg'
import News2 from '../assets/news2.jpg'
import News3 from '../assets/news3.jpg'

function Trip() {
  return (
    <div className='trip'>
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps</p>
      <div className='tripcard'>
        <TripData
          image={News1}
          heading='The construction of the first wind farm in Uzbekistan began'
          text='The UAE company Masdar began construction of a wind farm in Zarafshan. This station, which is expected to be commissioned by the end of 2024, is expected to generate enough electricity for 1.5 million households.'
        />
        <TripData
          image={News2}
          heading='Solar power plants, solutions to electrical energy problems'
          text='In our country, too, the focus is on the energy sector as a strategic direction, with new energy in recent years capacity was built. In our country as of 2030 electricity demand current 74 billion increase from kWh to 110 billion kWh calculated.'
        />
        <TripData
          image={News3}
          heading='New generation power plants'
          text='Uzbekistan produced electricity until 2030 renewable energy sources at the time of release aim to increase its share from the current 10% to 25% did. Electricity using traditional methods production already remains from urf. All among the industries, the most modern in this network are application of technology, innovation to the period requirement rounded.'
        />
      </div>
    </div>
  )
}

export default Trip
