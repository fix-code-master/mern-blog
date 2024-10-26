import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import logo from '../assets/logo.png'
import { useState } from 'react'

function About() {
  const [loading, setLoading] = useState(true)
  return (
    <>
      <div className='min-h-screen mt-20'>
        <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5 min-h-screen mb-10'>
          {/* left */}
          <div className='flex-1'>
            <Link to='/' className='font-bold dark:text-white text-4xl'>
              <img className='navbar-logo' src={logo} />
            </Link>
            <p className='text-sm mt-5'>
              This is a demo project. You can sign in with your email and
              password or with Google.
            </p>
          </div>
          {/* right */}

          <div className='flex-1'>
            <form className='flex flex-col gap-4'>
              <div>
                <Label value='Your email' className='w-100 text-start' />
                <TextInput
                  type='email'
                  placeholder='name@company.com'
                  id='email'
                  // onChange={handleChange}
                />
              </div>
              <div>
                <Label value='Your password' className='w-100 text-start' />
                <TextInput
                  type='password'
                  placeholder='**********'
                  id='password'
                  // onChange={handleChange}
                />
              </div>
              <Button
                // gradientDuoTone='purpleToPink'
                type='submit'
                // disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner size='sm' />
                    <span className='pl-3'>Loading...</span>
                  </>
                ) : (
                  'Sign In'
                )}
              </Button>
              {/* <OAuth /> */}
            </form>
            <div className='flex gap-2 text-sm mt-5'>
              <span>Dont Have an account?</span>
              <Link to='/sign-up' className='text-blue-500'>
                Sign Up
              </Link>
            </div>
            {/* {errorMessage && (
              <Alert className='mt-5' color='failure'>
                {errorMessage}
              </Alert>
            )} */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About
