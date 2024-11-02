import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import AboutImg from '../assets/night.jpg'
import Footer from '../components/Footer'
import GalleryBase from '../components/GalleryBase'

function Gallery() {
  return (
    <>
      <Navbar />
      <Hero
        cName='hero-mid'
        heroImg={AboutImg}
        title='Gallery'
        btnClass='hide'
      />
      <GalleryBase />
      <Footer />
    </>
  )
}

export default Gallery
