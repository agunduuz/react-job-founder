import React from "react";
import Bg from "../assets/image/bg-react-job-project.png";

type HeroProps = {
  title: string;
  subtitle: string;
};

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section className="bg-cover bg-no-repeat bg-center py-20  ">
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col  relative">
        <div className="z-100 ">
          <h1 className="text-4xl font-extrabold text-[#202020] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="my-4 text-l md:text-xl text-[#202020]">{subtitle}</p>
          <div className="absolute top-[-75px] right-0 opacity-20 md:opacity-100">
            {/* Adjust the Image component as needed */}
            <img className="z-0" src={Bg} alt="Background" />
          </div>
        </div>
      </article>
    </section>
  );
};

export default Hero;
