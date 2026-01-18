'use client';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import image1 from '../../../public/images/Blood Donation.png';
import image3 from '../../../public/images/ecommerce.jpg';
import image2 from '../../../public/images/studentLession.jpg';

import Image from 'next/image';

export default function Portfolio() {
  return (
    <div id="projects" className="group">
      <h1 className="text-2xl uppercase text-amber-400 text-center mb-3">my Portfolio</h1>
      <p className="mb-10 text-center">
        Showcasing my skills, projects, and journey as a developer
      </p>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 0,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide className="pb-20">
            <div className="card bg-base-100 mb-5 md:mb-0 shadow-2xl">
              <Image className="h-48 w-full object-cover" src={image1} alt="blood" />
              <div className="card-body p-4">
                <h2 className="card-title text-2xl font-bold h-13 overflow-hidden group-hover:text-amber-400 transition-all duration-500">
                  Blood Donation
                </h2>
                <p className="font-bold h-5 overflow-hidden">
                  Connecting donors with recipients in real time
                </p>
                <p className=" h-5 overflow-hidden">
                  A full-stack blood donation app with location-based donor matching, auth,
                  tracking, and responsive design.
                </p>
                <p className="line-clamp-4">
                  <span className="font-bold">Technologies:</span> React, Tailwind, Firebase/MERN,
                  DaisyUI.
                </p>
                <div className="card-actions mt-auto justify-end">
                  <a
                    className="link underline text-amber-400 capitalize"
                    href={'https://github.com/abdullah-al-mohammad?tab=repositories'}
                  >
                    view code
                  </a>
                  <a
                    className="link underline text-amber-400 capitalize ml-3"
                    href="https://blood-donation-77604.web.app"
                  >
                    live demo
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-20">
            <div className="card bg-base-100 mb-5 md:mb-0 shadow-2xl">
              <Image className="h-48 w-full object-cover" src={image2} alt="study" />
              <div className="card-body p-4">
                <h2 className="card-title text-2xl font-bold h-13 overflow-hidden group-hover:text-amber-400 transition-all duration-500">
                  Online groupe study
                </h2>
                <p className="font-bold line-clamp-2  h-5 overflow-hidden">
                  Connect with peers, share insights, and solve problems together.
                </p>
                <p className=" h-5 overflow-hidden">
                  Stay consistent and motivated through scheduled online study sessions.
                </p>
                <p className="line-clamp-4">
                  <span className="font-bold">Technologies:</span> React, Tailwind, Firebase/MERN,
                  DaisyUI.
                </p>
                <div className="card-actions mt-auto justify-end">
                  <a
                    className="link underline text-amber-400 capitalize"
                    href={'https://github.com/abdullah-al-mohammad/online-group-study'}
                  >
                    view code
                  </a>
                  <a
                    className="link underline text-amber-400 capitalize ml-3"
                    href="https://online-group-study-5c0f0.web.app"
                  >
                    live demo
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="pb-20">
            <div className="card bg-base-100 mb-5 md:mb-0 shadow-2xl">
              <Image className="h-48 w-full object-cover" src={image3} alt="ecommerce" />
              <div className="card-body p-4">
                <h2 className="card-title text-2xl font-bold h-13 overflow-hidden group-hover:text-amber-400 transition-all duration-500">
                  Shop the Best, Live the Best
                </h2>
                <p className=" h-5 overflow-hidden">
                  Discover top-quality products at unbeatable prices. Fast shipping, easy returns,
                  and endless choices—all in one place.
                </p>
                <p className="h-5 overflow-hidden">Quality you can trust, prices you’ll love.</p>
                <p className="line-clamp-4">
                  <span className="font-bold">Technologies:</span> React, Tailwind, Firebase/MERN,
                  DaisyUI.
                </p>
                <div className="card-actions justify-end">
                  <a
                    className="link underline capitalize text-amber-400"
                    href={'https://github.com/abdullah-al-mohammad?tab=repositories'}
                  >
                    view code
                  </a>
                  <a
                    className="link ml-3 underline text-amber-400 capitalize"
                    href="https://cartify-f3a7b.web.app"
                  >
                    live demo
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
