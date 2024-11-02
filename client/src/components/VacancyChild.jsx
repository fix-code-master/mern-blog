import './GalleryBase'
function VacancyChild() {
  return (
    <>
      {/* <!-- Contact Section --> */}
      <section class='bg-001'>
        <div class='container'>
          <div class='row'>
            <div class='col-12'>
              <div class='heading'>
                <h2>GET IN TOUCH</h2>
              </div>
            </div>

            {/* <!-- Left Side Contact Box --> */}
            <div class='col-lg-6 col-md-6 col-12'>
              <div class='contact-box'>
                <ul>
                  <li>
                    We invite professionals with strong qualifications to work
                    in their field
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End Left Side Contact Box --> */}

            {/* <!-- Right Side Contact Form --> */}
            <div class='col-lg-6 col-md-6 col-12'>
              <div class='contact-box'>
                <form action='' class='my-form'>
                  <div class='form-group'>
                    <input
                      type='name'
                      class='form-control'
                      placeholder='Name'
                    />
                  </div>

                  <div class='form-group'>
                    <input
                      type='email'
                      class='form-control'
                      placeholder='Email'
                    />
                  </div>

                  <div class='form-group'>
                    <input
                      type='text'
                      class='form-control'
                      placeholder='Enter your specialist'
                    />
                  </div>

                  <div class='form-group'>
                    <textarea
                      class='form-control'
                      name='message'
                      placeholder='Message'
                    ></textarea>
                  </div>

                  <div class='form-group'>
                    <div class='link'>
                      <a href='#'>Send</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- End Right Side Contact Form --> */}
          </div>
        </div>
      </section>
      {/* <!-- End Contact Section --> */}
    </>
  )
}

export default VacancyChild
