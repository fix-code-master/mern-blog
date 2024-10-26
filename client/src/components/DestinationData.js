import { Component } from 'react'
// import './DestinationStyles.css'

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.cName}>
        <div className='des-text'>
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className='image'>
          <div className='row'>
            <div className='col-md-4 align-content-center'>
              <div className='wrapper'>
                <div className='content'>
                  <img src={this.props.img1} alt='wind power' />
                  <h4>{this.props.Subtitle1}</h4>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='wrapper'>
                <div className='content'>
                  <img src={this.props.img2} alt='wind power' />
                  <h4>{this.props.Subtitle2}</h4>
                </div>
              </div>
              <div className='wrapper'>
                <div className='content'>
                  <img
                    className='solar-power'
                    src={this.props.img3}
                    alt='solar power'
                  />
                  <h4>{this.props.Subtitle3}</h4>
                </div>
              </div>
            </div>
            <div className='col-md-4 align-content-center'>
              <div className='wrapper'>
                <div className='content'>
                  <img src={this.props.img4} alt='wind power' />
                  <h4>{this.props.Subtitle4}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DestinationData
