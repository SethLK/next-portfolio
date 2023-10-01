// After: About component with linting issues resolved

import React from "react";
import Image from "next/image";

const About = () => {
  const images = [
    "imgs/icons8-html-5.svg",
    "imgs/icons8-css.svg",
    "imgs/icons8-javascript.svg",
    "imgs/bootstrap.svg",
    "imgs/icons8-tailwind-css.svg",
    "imgs/icons8-nodejs.svg",
    "imgs/icons8-express-js.svg",
    "imgs/icons8-mongodb.svg",
    "imgs/icons8-react-native.svg",
    "imgs/json-seeklogo.com.svg",
    "imgs/next-js-seeklogo.com.svg",
    "imgs/python.svg",
  ];

  return (
    <div id="about-me" className="box flex">
      <div className="text m-5">
        <h1 className="text-3xl underline">About Me</h1>
        <p className="mt-4">
          I&apos;m a self-taught programmer from Myanmar with a profound passion
          for crafting outstanding web and mobile experiences. I&apos;m driven by
          curiosity to explore scalable distribution systems, enjoy the
          challenge of problem-solving, and prioritize writing clean and
          maintainable code. I believe in the importance of responsive design,
          ensuring that websites are accessible to users across all devices.
        </p>
        <div className="slide-container m-4">
          <div className="slide flex flex-wrap">
            {images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                height={50}
                width={60}
                className="image-item m-2"
              />
            ))}
          </div>
        </div>
        <p>
        My programming journey started with Python, a versatile and beginner-friendly language. 
        Despite moments of frustration, I persevered, returned to the basics, and continued to
         expand my programming skills. Along the way, I built various web projects, delved into
          different programming languages, and even took on the role of tutoring new programmers,
           sharing my knowledge and passion.
        </p>
        <p className="mt-4">
        Now, I am transitioning into the world of Machine Learning, marking a new chapter in my career.
         As I embark on this exciting journey, I reflect on the path that brought me here. 
         My relentless pursuit of knowledge and determination has shaped me into a resilient and skilled developer,
          eager to adapt to the ever-evolving world of technology.
        </p>
      </div>
      {/* <img
      src={'/programming.svg'}
      /> */}
    </div>
  );
};

export default About;
