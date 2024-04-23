import './HeroStyles.css'

function Hero({ cName, heroImg, title, text, url, btnClass, btnText }) {
  return (
    <>
      <div className={cName}>
        <img alt='HeroImg' src={heroImg} />
        <div className='hero-text'>
          <h1>{title}</h1>
          <p>{text}</p>
          <a href={url} className={btnClass}>
            {btnText}
          </a>
        </div>
      </div>
    </>
  )
}

export default Hero
