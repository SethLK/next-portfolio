import Image from 'next/image'
import './home.css'

export default function Home() {
  return (
    <div id="home" className="home">
      <div className="text m-5 ">
        <h1 className="text-6xl mb-3">Hello 👋</h1>
        <h1 className="text-4xl mb-3">I am Seth</h1>
        <h3 className="text-3xl mb-3">
          Frontend, Backend
        </h3>
        <p className="text-3xl mb-3">A passionate Full Stack Developer</p>
        <p className="text-2xl mb-3">Proficient in JavaScript, Node.js, and more</p>
        <p className="text-2xl mb-3">
          A tutor, musician, leader, and <br/> someone who excels in teamwork and collaboration.
        </p>
      </div>
      
      <div className="image-container">

        <Image
          src={'/programming.svg'}
          className='img m-4'
          width={400}
          height={400}
          alt='Dev Img'
        />
      </div>
    </div>
    
    
  )
}
