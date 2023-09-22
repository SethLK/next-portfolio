import Image from 'next/image'

export default function Home() {
  return (
    <div id="about-me" className="box flex">
      <div className="text m-5">
        <h1 className="text-5xl">Hello 👋</h1>
        <h1 className='text-3xl'>I am Seth </h1>
        <h3 className='text-2xl'>Frontend, <span className='md:font-bold underline'>Backend</span>, FullStack</h3>
        
      </div>
      {/* <img
      src={'/programming.svg'}
      /> */}
    </div>
  )
}
