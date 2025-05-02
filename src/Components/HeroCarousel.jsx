import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Slide1 from '../assets/1.jpg';
import Slide2 from '../assets/1.jpg';
import Slide3 from '../assets/1.jpg';

const slides = [
  {
    id: 1,
    background: Slide1,
    title: 'Bringing Affordable & Clean Power to Your Doorstep',
    subtitle: 'Reliable Solar Energy for Every Company and Organization',
    description:
      "We provide smart, affordable solar solutions to help you cut down electricity bills and enjoy 24/7 power. Whether it's your organization or business, we've got a solar system that fits your needs.",
  },
  {
    id: 2,
    background: Slide2,
    title: 'Powering Progress with Clean Energy',
    subtitle: 'Tailored solar systems for every industry',
    description:
      'With durable panels and seamless installation, URBank Energy helps organizations scale efficiently while staying green.',
  },
  {
    id: 3,
    background: Slide3,
    title: 'Go Solar. Save More.',
    subtitle: 'Efficiency meets sustainability',
    description:
      'Slash your utility bills while reducing your carbon footprint. We engineer solar systems built for long-term impact.',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const handleClick = (e) => {
    const x = e.nativeEvent.offsetX;
    const width = e.currentTarget.offsetWidth;
    if (x < width / 2) {
      prevSlide();
    } else {
      nextSlide();
    }
  };

  return (
    <div
      className="relative w-full overflow-hidden h-[500px] mt-28 md:h-[600px] select-none"
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-[500px] md:h-[600px] bg-cover bg-center bg-stone-900/30 relative cursor-pointer"
            style={{ backgroundImage: `url(${slide.background})` }}
            onClick={handleClick}
          >
            <div className="absolute left-4 md:left-[108px] top-[80px] md:top-[140px] inline-flex flex-col justify-start items-start gap-6">
              <div className="flex flex-col justify-start items-start gap-4">
                <div className="flex justify-start items-center gap-4">
                  <div className="w-6 h-0 origin-top-left -rotate-90 outline outline-4 outline-offset-[-2px] outline-amber-500" />
                  <span className="text-white/70 text-lg md:text-xl font-medium leading-tight">
                    {slide.subtitle}
                  </span>
                </div>
                <h1 className="w-full md:w-[667px] text-white text-3xl md:text-6xl font-bold leading-[42px] md:leading-[64px]">
                  {slide.title}
                </h1>
                <p className="w-full md:w-[561px] text-white text-base font-normal leading-normal">
                  {slide.description}
                </p>
              </div>
              <Link to="/about-us">
                <button className="w-60 h-12 md:h-14 p-3 bg-amber-500 rounded-lg flex justify-center items-center">
                  <span className="text-white text-xl md:text-2xl font-bold">Learn More</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
