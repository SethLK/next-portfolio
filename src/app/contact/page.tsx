import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div id="contact" className="box me flex"> 
      <div className="text m-5">
        <h1 className="text-5xl">Contact Me</h1>
        <Link href="mailto:sethlk2006@gmail.com?subject=Hello&body=Hello" className="btn text-2xl bg-slate-900">
          Just Say &quot;Hello&quot;📧
        </Link>
        <div className="img-container flex justify-center mt-7"> {/* Add margin-top and margin-bottom */}
          <Link href={'https://github.com/SethLK'} target={'_blank'} className="links">
            <Image
              className="github-img"
              src={'/imgs/github-mark.svg'}
              width={48}
              height={48}
              alt="Github"
            />
          </Link>
          <Link href={'https://www.linkedin.com/in/seth-pau-571151282'} target={'_blank'} className="links">
            <Image
              className="linkedIn-img"
              src={'/imgs/linkedIN.svg'}
              width={150}
              height={150}
              alt="LinkedIN"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
