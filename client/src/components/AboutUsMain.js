import './AboutUsStyles.css'
import AboutImage from '../assets/energy.jpg'
function AboutUsMain() {
  return (
    <section className='bg-02'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 py-5'>
            <div className='edge'>
              <img src={AboutImage} />
            </div>
          </div>
          <div className='col-md py-5'>
            <div className='heading py-4'>
              <h1>Find a new competitive edge</h1>
              <p>
                We study and invent new technologies, as well as present and use
                them professionally.
              </p>
            </div>

            <div className='wrapper'>
              <div className='row'>
                <div className='col-md-6 col-sm-12'>
                  <div className='icon'>
                    <i className='fi fi-ts-location-crosshairs'></i>
                    <h4>12</h4>
                    <h5>years of experience</h5>
                  </div>
                </div>

                <div className='col-md-6 col-sm-12'>
                  <div className='icon'>
                    <i className='fi fi-tr-feedback-review'></i>
                    <h4>255</h4>
                    <h5>truster clients</h5>
                  </div>
                </div>

                <div className='col-md-6 col-sm-12'>
                  <div className='icon'>
                    <i className='fi fi-ts-videoconference'></i>
                    <h4>20</h4>
                    <h5>visited Conferences</h5>
                  </div>
                </div>

                <div className='col-md-6 col-sm-12'>
                  <div className='icon'>
                    <i className='fi fi-tr-badget-check-alt'></i>
                    <h4>40</h4>
                    <h5>master certifications</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsMain
