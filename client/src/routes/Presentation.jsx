import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import AboutImg from '../assets/charge.jpg'
import Footer from '../components/Footer'
import PresentationChild from '../components/PresentationChild'

function Presentation() {
  return (
    <>
      <Navbar />
      <Hero
        cName='hero-mid'
        heroImg={AboutImg}
        title='Presentation'
        btnClass='hide'
      />
      <PresentationChild />
      <Footer />
    </>
  )
}

export default Presentation
