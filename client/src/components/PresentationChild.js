import './GalleryBase'
import Presentation1 from '../assets/photo_2022.jpg'
import Presentation2 from '../assets/photo_2022_2.jpg'
import Presentation3 from '../assets/photo_2022_3.jpg'
import Presentation4 from '../assets/photo_2022_4.jpg'

export default function PresentationChild() {
  return (
    <>
      <div class='container'>
        {/* <!-- Presentation --> */}
        {/* <!-- About US --> */}
        <div class='row natur-row no-margin w-100'>
          <div class='text-part col-md-6 mt-5 mb-4'>
            <h2>We Are Nature Lovers</h2>
            Bukhara NPP LLC was formed on May 5, 2011. Being one of a few
            enterprises of Bukhara NPP LLC are engaged in: <br />
            - commissioning of electrical installations up to 500 kV,
            construction transformer substations up to 500 kV turnkey, <br />
            - repair of electric motors and transformers, installation of the
            system ASKUE and their maintenance,
            <br />
            - conducting an energy audit at the enterprise, which is relevant
            for today,
            <br />
            - turnkey design and installation of Smart homes,
            <br />
            Promising directions:
            <br />
            - construction and commissioning of solar and wind power plants
            power plants,
            <br />
            - microprocessor control, <br />
            - production of microchips. <br />
            <p>
              Professionalism is necessary in any business. Especially when it
              comes to the safety of people and property. Therefore, you should
              not save money by independently checking how worn out the
              electrical equipment is. It is much better and more correct to
              contact Bukhara NPP LLC, where qualified specialists work who are
              able to eliminate any defects in wiring and devices and assist in
              their elimination.
            </p>
          </div>
          <div class='image-part col-md-6 mt-5'>
            <div className='row'>
              <img src={Presentation1} alt='' />
            </div>
            <div class='row mt-5'>
              <div class='col-md-4'>
                <img src={Presentation2} alt='' />
              </div>
              <div class='col-md-4'>
                <img src={Presentation3} alt='' />
              </div>
              <div class='col-md-4'>
                <img src={Presentation4} alt='' />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End About US --> */}
        {/* <!-- Prices --> */}
        <div class='row'>
          <p class='title-head'>
            Below are the technical and economic indicators of a 6MW solar power
            plant.
          </p>
        </div>

        <div class='row'>
          <table class='table table-bordered add-color'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Installed system capacity</th>
                <th scope='col'>6MW, 5.76MWh, 5.94MW/2.97MWh per day</th>
                <th scope='col'>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'></th>
                <td>Installation area</td>
                <td>27000m&sup2</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Invertor(sine)</td>
                <td>Total power 6MW (300pcs)</td>
                <td>9300000$</td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Accumulators</td>
                <td>Total 160000A/hour (8000pcs)</td>
                <td>1800000$</td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Solar controller</td>
                <td>6MW (1100pcs)</td>
                <td>1650000$</td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Box for accumulator</td>
                <td></td>
                <td>520000$</td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Solar module type</td>
                <td>Monocrystall, Polycrystalline PERC</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Solar module power</td>
                <td>450W (5.94MW, 13200pcs)</td>
                <td>1293600$</td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Efficiency of solar module</td>
                <td>+20%</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Installation angle of solar modules</td>
                <td>350-450</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Average annual forecast of electricity generation</td>
                <td>528MW/hour/year</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Total cost of the project including VAT:</td>
                <td>Total 160000A/hour (8000pcs)</td>
                <td>14563600$</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- 2 --> */}
        <div class='row'>
          <p class='title-head'>
            Below are the technical and economic indicators of a 4.4MW solar
            power plant.
          </p>
        </div>

        <div class='row'>
          <table class='table table-bordered add-color'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Installed system capacity</th>
                <th scope='col'>4.4MW, 1.5MW, 240000Ah, 726kW BST</th>
                <th scope='col'>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'></th>
                <td>Installation area</td>
                <td>27000m&sup2</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Invertor(sine)</td>
                <td>Total power 4.4MW (300pcs)</td>
                <td>5400000$</td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Accumulators</td>
                <td>Total 480000A/hour (2400 pcs)</td>
                <td>540000$</td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Solar controller</td>
                <td>4.4MW (100pcs)</td>
                <td>900000$</td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Box for accumulator</td>
                <td></td>
                <td>220000$</td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Solar module type</td>
                <td>Monocrystall, Polycrystalline PERC</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Solar module power</td>
                <td>450W (99000kW, 2200pcs)</td>
                <td>215600$</td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Efficiency of solar module</td>
                <td>+20%</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Installation angle of solar modules</td>
                <td>350-450</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Average annual forecast of electricity generation</td>
                <td>440MW/hour/year</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Total cost of the project including VAT:</td>
                <td></td>
                <td>7275600$</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- 2 --> */}
        {/* <!-- 3 --> */}
        <div class='row'>
          <p class='title-head'>
            Below are the technical and economic indicators of a 1 MW solar
            power plant.
          </p>
        </div>

        <div class='row'>
          <table class='table table-bordered add-color'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Installed system capacity</th>
                <th scope='col'>1MW, 1.5MW, 240000Ah, 726kW BST</th>
                <th scope='col'>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'></th>
                <td>Installation area</td>
                <td>27000m&sup2</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Invertor(sine)</td>
                <td>Total power 1MW (1000pcs)</td>
                <td>2086500$</td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Accumulators</td>
                <td>Total 480000A/hour (2400 pcs)</td>
                <td>540000$</td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Solar controller</td>
                <td>1MW (1000pcs)</td>
                <td>300000$</td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Box for accumulator</td>
                <td></td>
                <td>220000$</td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Solar module type</td>
                <td>Monocrystall, Polycrystalline PERC</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Solar module power</td>
                <td>450W (450MW, 1000pcs)</td>
                <td>215600$</td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Efficiency of solar module</td>
                <td>+20%</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Installation angle of solar modules</td>
                <td>350-450</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Average annual forecast of electricity generation</td>
                <td>237MW/hour/year</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Total cost of the project including VAT:</td>
                <td></td>
                <td>3231500$</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- 3 --> */}
        {/* <!-- 4 --> */}
        <div class='row'>
          <p class='title-head'>
            Below we offer a commercial offer for the installation of a 1 kW
            solar power plant installed on the roof surface of houses and
            industrial buildings.
          </p>
        </div>

        <div class='row'>
          <table class='table table-bordered add-color'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Installed system capacity</th>
                <th scope='col'>1 kWt</th>
                <th scope='col'>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'></th>
                <td>Type of construction</td>
                <td>Permanent</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Type of solar modules</td>
                <td>Single crystal</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Power of one module</td>
                <td>550W</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Efficiency of the solar module</td>
                <td>0,26</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Solar Module Size</td>
                <td>2256 x 1133 x 35 mm</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Angle of installation of solar modules</td>
                <td>
                  26<sup>o</sup> - 30<sup>o</sup>
                </td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Forecast of electricity generation on average</td>
                <td>1 280 kWt*h/year</td>
                <td></td>
              </tr>
              <tr>
                <th scope='row'></th>
                <td>Total cost of the project with VAT</td>
                <td></td>
                <td>1165$</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- 4 --> */}
      </div>
      {/* <!-- End Prices --> */}
      {/* <!-- End Presentation --> */}
    </>
  )
}
