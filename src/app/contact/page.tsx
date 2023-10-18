"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import './contact.css'

export default function Home() {
  const [email, setEmail] = useState<string>('Hello Seth'); // Set the initial state

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEmail(event.target.value);
  };

  const mailtoLink = `mailto:sethlk2006@gmail.com?subject=Hey Man&body=${email}`;

  return (
    <div id="contact" className="box me flex justify-center"> {/* Center the content */}
      <div className="text m-5">
        <h1 className="text-5xl">Got in Touch</h1>
        <div className="email-container">
          <textarea
            name="email"
            id="email"
            cols={25}
            rows={8}
            value={email} // Set the value to the email variable
            onChange={handleChange}
          ></textarea>
          <br />
          <button className="btn">
            <Link href={mailtoLink}>Send⚡</Link>
          </button>
        </div>
        
        <div className="img-container flex justify-center mt-7"> {/* Center the images and add margin-top */}
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
              src={'/imgs/linkedin.svg'}
              width={150}
              height={150}
              alt="LinkedIn"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
