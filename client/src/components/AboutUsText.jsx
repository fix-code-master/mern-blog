import './GalleryBase.css'
function AboutUsText() {
  return (
    <>
      {/* <!-- About Us Text --> */}
      <div className='row contact-rooo no-margin'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-sm-6 left-part text-start'>
              <h2>About Us</h2>
              <p className='inner-text'>
                Bukhara AES LLC was established on May 5, 2011. Being one of the
                few enterprises, Bukhara NPP LLC is engaged in:
                <br />
                - Commissioning of electrical installations up to 500 kV,
                Construction of transformer substations up to 500 kV on a
                turnkey basis,
                <br />
                - Repair of electric motors and transformers, Installation of
                the ASKUE system and their maintenance,
                <br />
                - Carrying out an energy audit at the enterprise, which is
                relevant today,
                <br />
                - Design and installation of "smart houses" on a turnkey basis.
                Promising directions,
                <br />
                - Construction and commissioning of solar and wind power plants,
                <br />
                - Microprocessor control - Chip production, <br />
                Professionalism is essential in any business. Especially when it
                comes to the safety of people and property. Therefore, it is not
                worth saving by yourself checking how worn out the electrical
                equipment is. It is much better and more correct to contact
                Bukhara NPP LLC, where qualified specialists work who can
                eliminate any defects in wiring and devices and assist in their
                elimination.
              </p>
            </div>
            <div className='col-lg-6 col-sm-6 right-part text-start'>
              <h2>Our Principles</h2>
              <p className='inner-text'></p>
              <ul>
                <li>1. COMPLETE SOLUTIONS TO SATISFY CUSTOMER REQUIREMENTS</li>
                <li>2. TRANSPARENT AND INDEPENDENT RELATIONSHIPS WITH</li>
                <li>3. STRICT BOTTOM UP PRICING TO OFFER THE LOWEST PRICE</li>
                <li>4. COST-EFFECTIVE FUNDING STRUCTURE</li>
                <li>
                  5. HIGH QUALITY, CULTURALLY DIFFERENT AND EMPOWERED TALENTS
                </li>
                <li>
                  6. COMMITMENT TO SUSTAINABILITY, HEALTH, SAFETY AND CORPORATE
                  SOCIAL RESPONSIBILITY
                </li>
                <li>
                  7. COMMITMENT TO ACTIVITIES IN CONFORMITY WITH ISLAM (SHARIA)
                </li>
              </ul>
              <br />
              <p>
                <span>Our partners are:</span> Neftgazstroyremont (NGSR), SE
                Center "Uzaeronavigatsia", Bukhara RMZ, Uztemiryulconteiner JSC
                "Uzbekiston temir yullari", UE Trubodetal MNGM and many others.
                We have the honor to offer you cooperation with Bukhara NPP LLC
                and wish you all the best.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End About Us Text --> */}
      {/* <!-- Contact Form --> */}
      <div>
        <iframe
          style={{ width: '100%', border: '0' }}
          src='https://maps.google.com/maps?width=631.67&height=486.67&hl=en&q=buxoro kogon shaxri&t=&z=13&ie=UTF8&iwloc=B&output=embed'
          height='450'
          frameBorder='0'
          allowFullScreen
        ></iframe>
      </div>

      <div className='row contact-rooo no-margin text-start'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-6 left-part'>
              <h2>Contact Form</h2>
              <div className='row'>
                <div className='col-sm-3'>
                  <label>Enter Name :</label>
                </div>
                <div className='col-sm-8'>
                  <input
                    type='text'
                    placeholder='Enter Name'
                    name='name'
                    className='form-control input-sm'
                  />
                </div>
              </div>
              <div className='row mt-3'>
                <div className='col-sm-3'>
                  <label>Email Address:</label>
                </div>
                <div className='col-sm-8'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Enter Email Address'
                    className='form-control input-sm'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-3'>
                  <label>Mobile Number:</label>
                </div>
                <div className='col-sm-8'>
                  <input
                    type='text'
                    name='name'
                    placeholder='Enter Mobile Number'
                    className='form-control input-sm'
                  />
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-3'>
                  <label>Enter Message:</label>
                </div>
                <div className='col-sm-8'>
                  <textarea
                    rows='5'
                    placeholder='Enter Your Message'
                    className='form-control input-sm'
                  ></textarea>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-3'>
                  <label></label>
                </div>
                <div className='col-sm-8'>
                  <button className='btn btn-info btn-sm'>Send Message</button>
                </div>
              </div>
            </div>
            <div className='col-sm-6 right-part'>
              <h2>Address:</h2>
              <p>Bukhara region</p>
              <p>Kogon city</p>
              <p>706100 17 Boburshokh street</p>
              <span>Phone:</span> +998 90-513-27-43
              <br />
              <span>Phone:</span> +998 65-524-33-83
              <br />
              <span>Email:</span> buxara-aes@mail.ru
              <br />
              <span>Website:</span> www.buxoroaes.uz
              <br />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End Contact Form --> */}
    </>
  )
}

export default AboutUsText
