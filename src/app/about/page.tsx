import React from "react";
import Image from "next/image";

const About = () => {
  const images = [
    "imgs/icons8-html-5.svg",
    "imgs/icons8-css.svg",
    "imgs/icons8-javascript.svg",
    "imgs/python.svg",
    "imgs/icons8-c.svg",
    "imgs/icons8-c (1).svg",
    "imgs/php-1 (1).svg",
    "imgs/bootstrap.svg",
    "imgs/icons8-tailwind-css.svg",
    "imgs/icons8-nodejs.svg",
    "imgs/icons8-vite.svg",
    "imgs/icons8-react-native.svg",
    "imgs/icons8-express-js.svg",
    "imgs/json-seeklogo.com.svg",
    "imgs/icons8-mongodb.svg",
    "imgs/icons8-mysql.svg",
    "imgs/next-js-seeklogo.com.svg",
    "imgs/laravel-2 (1).svg",
    "imgs/icons8-chess.svg",
  ];

  return (
    <div id="about-me" className="box flex">
      <div className="text m-5">
        <h1 className="text-3xl underline">About Me</h1>
        <p className="mt-4">
          I&apos;m a self-taught programmer from Myanmar with a deep passion for creating exceptional web and mobile experiences. I&apos;m fueled by curiosity, thriving on the challenge of solving problems, and committed to writing clean and maintainable code. I strongly believe in the significance of responsive design, ensuring that websites are accessible to users across all devices.
        </p>
        
        <p className="mt-4">
          My journey into programming began with Python, a versatile and user-friendly language. Despite moments of frustration, I persevered, revisited the fundamentals, and continued expanding my programming skills. Along the way, I&aposve developed a variety of web projects, delved into different programming languages, and even embraced the role of mentoring new programmers, sharing my knowledge and enthusiasm.
        </p>
        <p className="mt-4">
          Now, I&aposm venturing into the realm of Machine Learning, marking an exciting new chapter in my career. As I embark on this journey, I reflect on the path that has brought me here. My unwavering commitment to learning and my determination have molded me into a resilient and skilled developer, always ready to adapt to the ever-evolving world of technology.
        </p>
        <p className="mt-4">
          Additionally, I have a passion for playing chess, which I find both intellectually stimulating and enjoyable.
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
      </div>
    </div>
  );
};

export default About;
