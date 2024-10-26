import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import AboutImg from '../assets/railway.jpg'
import Footer from '../components/Footer'
import AboutUsMain from '../components/AboutUsMain'
import AboutUsText from '../components/AboutUsText'

function About() {
  return (
    <>
      <Navbar />
      <Hero cName='hero-mid' heroImg={AboutImg} title='AboutUs' btnClass='hide' />
      <AboutUsMain />
      <AboutUsText />
      <Footer />
    </>
  )
}

export default About
