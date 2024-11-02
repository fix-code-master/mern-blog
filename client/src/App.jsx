import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import AboutUs from './routes/AboutUs'
import SignUp from './routes/SignUp'
import Navbar from './components/Navbar'
import Gallery from './routes/Galllery'
import Presentation from './routes/Presentation'
import Vacancy from './routes/Vacancy'
import SignIn from './routes/SignIn'

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/presentation' element={<Presentation />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/vacancy' element={<Vacancy />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
      <Navbar />
    </div>
  )
}
