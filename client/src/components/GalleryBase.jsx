import Gallery1 from '../assets/gallery-1.jpg'
import Gallery2 from '../assets/gallery-2.jpg'
import Gallery3 from '../assets/gallery-3.jpg'
import Gallery4 from '../assets/gallery-4.jpg'
import Gallery5 from '../assets/gallery-5.jpg'
import Gallery6 from '../assets/gallery-6.jpg'
import Gallery7 from '../assets/gallery-7.jpg'
import Gallery8 from '../assets/gallery-8.jpg'
import Gallery9 from '../assets/gallery-9.jpg'
import Gallery10 from '../assets/gallery-10.jpg'
import Gallery11 from '../assets/gallery-11.jpg'
import Gallery12 from '../assets/gallery-12.jpg'
import './GalleryBase.css'

function GalleryBase() {
  // gallery filter function
  const filterButtons = document.querySelectorAll('.filter-button')
  const filters = document.querySelectorAll('.filter')

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const value = button.getAttribute('data-filter')

      if (value === 'all') {
        filters.forEach(function (filter) {
          filter.style.display = 'block'
        })
      } else {
        filters.forEach(function (filter) {
          if (filter.classList.contains(value)) {
            filter.style.display = 'block'
          } else {
            filter.style.display = 'none'
          }
        })
      }

      filterButtons.forEach(function (btn) {
        btn.classList.remove('active')
      })
      button.classList.add('active')
    })
  })

  return (
    <>
      {/* <!-- Gallery Section --> */}
      <div className='gallery'>
        <div className='container'>
          <div className='row'>
            {/* <!-- Filter Buttons --> */}
            <div className='gallery-filter d-none d-sm-block'>
              <button
                className='btn btn-default filter-button'
                data-filter='all'
              >
                All
              </button>
              <button
                className='btn btn-default filter-button'
                data-filter='wind'
              >
                Wind Power
              </button>
              <button
                className='btn btn-default filter-button'
                data-filter='solar'
              >
                Solar Panels
              </button>
              <button
                className='btn btn-default filter-button'
                data-filter='panel'
              >
                Type of panels
              </button>
              <button
                className='btn btn-default filter-button'
                data-filter='transformer'
              >
                Transformers
              </button>
            </div>
            <br />

            {/* <!-- Gallery Images --> */}
            <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter solar'>
              <img src={Gallery4} className='img-responsive' />
            </div>

            <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter transformer'>
              <img src={Gallery7} className='img-responsive' />
            </div>

            <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter wind'>
              <img src={Gallery10} className='img-responsive' />
            </div>

            <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter panel'>
              <img src={Gallery1} className='img-responsive' />
            </div>

            <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter solar'>
              <img src={Gallery5} className='img-responsive' />
            </div>

            <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter transformer'>
              <img src={Gallery8} className='img-responsive' />
            </div>

            <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter wind'>
              <img src={Gallery11} className='img-responsive' />
            </div>

            <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter panel'>
              <img src={Gallery6} className='img-responsive' />
            </div>

            <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter solar'>
              <img src={Gallery9} className='img-responsive' />
            </div>

            <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter transformer'>
              <img src={Gallery9} className='img-responsive' />
            </div>

            <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter wind'>
              <img src={Gallery12} className='img-responsive' />
            </div>
            <div className='gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-6 filter panel'>
              <img src={Gallery3} className='img-responsive' />
            </div>
            {/* <!-- Add more gallery_product divs with appropriate filter classes and image sources --> */}
          </div>
        </div>
      </div>
      {/* <!-- Gallery Section -->  */}
    </>
  )
}

export default GalleryBase
