import Image from 'next/image'

export default function Home() {
  return (
    <div id="about-me" className="box flex">
      <div className="text m-5">
        <h1 className="text-5xl"><a href="https://github.com/SethLK?tab=repositories" target='_blank'>Projects</a></h1>
      </div>
      {/* <img
      src={'/programming.svg'}
      /> */}
    </div>
  )
}
