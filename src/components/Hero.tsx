import React from "react";
type HeroProps = {
  title: string;
  tagline: string;
};

const Hero = ({title,tagline}:HeroProps) => {
  return (
    <div className="w-full bg-blue-700 h-[40vh] text-white flex flex-col justify-center items-center gap-4 p-16 border-t border-t-[#c0dfe2]">
      <div className="text-5xl font-bold">{title}</div>
      <div className="text">{tagline}</div>
    </div>
  );
};

export default Hero;
