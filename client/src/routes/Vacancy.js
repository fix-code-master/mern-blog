import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import AboutImg from '../assets/2.jpg'
import Footer from '../components/Footer'
import VacancyChild from '../components/VacancyChild'

function Vacancy() {
  return (
    <>
      <Navbar />
      <Hero
        cName='hero-mid'
        heroImg={AboutImg}
        title='Vacancy'
        btnClass='hide'
      />
      <VacancyChild />
      <Footer />
    </>
  )
}

export default Vacancy
