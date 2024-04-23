import Destination from '../components/Destination'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Trip from '../components/Trip'

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName='hero'
        heroImg='../assets/12.jpg'
        title='Your Journey Your Story'
        text='Choose Your Favorite Destination.'
        url='/'
        btnClass='show'
        btnText='Travel Plan'
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  )
}

export default Home
