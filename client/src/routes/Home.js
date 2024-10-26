import Destination from '../components/Destination'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Trip from '../components/Trip'
import AboutImg from '../assets/12.jpg'
import AboutUsMain from '../components/AboutUsMain'

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName='hero'
        heroImg={AboutImg}
        title='Your choice Your future'
        text='Choose Your Favorite Plan.'
        url='/'
        btnClass='show'
        btnText='Your Future'
      />
      <AboutUsMain />
      <Destination />
      <Trip />
      <Footer />
    </>
  )
}

export default Home
