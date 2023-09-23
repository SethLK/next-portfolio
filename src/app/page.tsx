import Image from 'next/image'

export default function Home() {
  return (
    <div id="about-me" className="box flex">
      <div className="text m-5">
        <h1 className="text-5xl">Hello 👋</h1>
        <h1 className='text-3xl'>I am Seth </h1>
        <h3 className='text-2xl'>Frontend, 😂<span className='md:font-bold underline'>Backend</span>😂, FullStack</h3>
        <p className="text-xl">A passionate Full Stack Developer</p>
        <p className="text-lg">Proficient in JavaScript, Node.js, and more</p>

      </div>
      <div className="image-container">

        <Image
          src={'/programming.svg'}
          className='img'
          width={400}
          height={400}
          alt='Dev Img'
        />
      </div>
    </div>
  )
}
