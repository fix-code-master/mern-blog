import DestinationData from './DestinationData'
import './DestinationStyles.css'
import Image1 from '../assets/image1.png'
import Image2 from '../assets/image2.png'
import Image3 from '../assets/image3.png'
import Image4 from '../assets/image4.png'
import Image5 from '../assets/image5.png'
import Image6 from '../assets/image6.png'
import Image7 from '../assets/image7.png'
import Image8 from '../assets/image8.png'

const Destination = () => {
  return (
    <div className='destination'>
      <h1>Services</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>
      <DestinationData
        cName='first-des'
        heading='We position our clients at the forefront of their field by
                  advancing an agenda.'
        text='Easily apply to multiple jobs with one click! Quick Apply
                  shows you recommended jobs based off your most recent search
                  and allows you to apply to 25+ jobs in a matter of seconds!'
        img1={Image1}
        img2={Image2}
        img3={Image3}
        img4={Image4}
        Subtitle1='Installation wind power energy'
        Subtitle2='Installation solars panel'
        Subtitle3='Installation Mejurment Instrumentals Divices'
        Subtitle4='Intallation any transformators station'
      />
      <DestinationData
        cName='first-des-reverse'
        heading='Quick apply shows you recommended jobs based off your most recent search.'
        text='We express our deep respect to you and represents to consideration of a commercial offer for installation on the terms turnkey solar power plants integrated with energy system for household and industrial users population. The company provides a 10-year warranty on solar panels, except for the probability of mechanical damage and 5 years for the solar power plant as a whole.'
        img1={Image5}
        img2={Image6}
        img3={Image7}
        img4={Image8}
        Subtitle1='Installation of electrical wires'
        Subtitle2='Installation solars panel'
        Subtitle3='Installation any types panels'
        Subtitle4='Intallation any transformators station'
      />
    </div>
  )
}

export default Destination
