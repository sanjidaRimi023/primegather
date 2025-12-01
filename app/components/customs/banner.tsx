"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Parallax, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; 
import "swiper/css/effect-fade"; 
const slidesData = [
  {
    id: 1,
    image: "/image1.jpg",
    title: "Discover Unforgettable Events",
    subtitle: "From local meetups to grand festivals, find your next adventure.",
    ctaBtn: "Explore Events",
    ctaLink: "/",
  },
  {
    id: 2,
    image: "/image2.jpg",
    title: "Organize with Ease",
    subtitle: "Simple tools to plan, promote, and manage your gatherings.",
    ctaBtn: "Start Organizing",
    ctaLink: "/",
  },
  {
    id: 3,
    image: "/image3.jpg",
    title: "Connect & Engage",
    subtitle: "Build communities around shared passions and interests.",
    ctaBtn: "Join a Community",
    ctaLink: "/",
  },
  {
    id: 4,
    image: "/image4.jpg",
    title: "Your Prime Event Partner",
    subtitle: "We're here to make every moment memorable.",
    ctaBtn: "Learn More",
    ctaLink: "/",
  },
];

export default function BannerSection() {
  return (
    <section className="w-full h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Parallax, Autoplay]}
        navigation={true} 
        pagination={{ clickable: true }} 
        effect="fade"
        parallax={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false, 
        }}
        loop={true} 
        className="mySwiper w-full h-full"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
              data-swiper-parallax="-20%"
            >
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
            </div>

 
            <div 
              className="flex flex-col text-white items-center text-center justify-center h-full relative z-10"
              data-swiper-parallax="-100" 
            >
         
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg animate-fade-in-up">
                {slide.title}
              </h1>
     
              <p className="text-lg md:text-xl font-medium text-gray-200 drop-shadow-md animate-fade-in-up delay-100">
                {slide.subtitle}
              </p>
     
              <a
                href={slide.ctaLink}
                className="inline-block mt-6 px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 animate-fade-in-up delay-200"
              >
                {slide.ctaBtn}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}