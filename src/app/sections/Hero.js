'use client';
import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Link from 'next/link';
export default function Hero() {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Autoplay]}
        loop
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className='flex h-auto lg:h-screen slide1Bg '>
            <div className='min-h-[380px] w-11/12 lg:w-8/12   text-white h-full p-4 py-16 lg:p-20 flex items-center'>
              <div className='w-11/12 lg:w-4/5 flex flex-col gap-5 lg:gap-4'>
                <p className='text-lg'>Trusted Renovation Experts</p>
                <h2 className='text-3xl md:text-5xl xl:text-6xl font-semibold'>
                  Complete Home Renovations From Concept to Completion
                </h2>
                <p className='text-sm lg:text-lg'>
                  We transform houses into dream homes with full remodels,
                  additions, and modern updates  delivered on time and on budget.
                </p>
                <div className='flex gap-4'>
                  <Link href={'/contact'}>
                    <button className='text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-primary bg-white rounded-2xl font-semibold cursor-pointer'>
                      Get a Free Quote
                    </button>
                  </Link>
                  <Link href={'/contact'}>
                    <button className='text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-white bg-primary rounded-2xl font-semibold cursor-pointer'>
                      Our Services
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='w-1/12 lg:w-4/12'></div>
          </div>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <div className='flex h-auto lg:h-screen slide2Bg '>
            <div className='min-h-[380px] w-11/12 lg:w-8/12   text-white h-full p-4 py-16 lg:p-20 flex items-center'>
              <div className='w-11/12 lg:w-4/5 flex flex-col gap-5 lg:gap-4'>
                <p className='text-lg'>Make More of Your Space</p>
                <h2 className='text-3xl md:text-5xl xl:text-6xl font-semibold'>
                  Basement Renovations <br /> Functional & Stylish
                </h2>
                <p className='text-sm lg:text-lg'>
                  Turn unused basements into livable spaces  rec rooms, home
                  offices, gyms, or rental suites  finished with quality
                  craftsmanship.
                </p>
                <div className='flex gap-4'>
                  <Link href={'/contact'}>
                    <button className='text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-primary bg-white rounded-2xl font-semibold cursor-pointer'>
                      See Projects
                    </button>
                  </Link>
                  <Link href={'/contact'}>
                    <button className='text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-white bg-primary rounded-2xl font-semibold cursor-pointer'>
                      Book an Estimate
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='w-1/12 lg:w-4/12'></div>
          </div>
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide>
          <div className='flex h-auto lg:h-screen slide3Bg '>
            <div className='min-h-[380px] w-11/12 lg:w-8/12   text-white h-full p-4 py-16 lg:p-20 flex items-center'>
              <div className='w-11/12 lg:w-4/5 flex flex-col gap-5 lg:gap-4'>
                <p className='text-lg'>Design. Build. Delight.</p>
                <h2 className='text-3xl md:text-5xl xl:text-6xl font-semibold'>
                  Kitchen Remodeling <br /> Beautiful, Functional Kitchens
                </h2>
                <p className='text-sm lg:text-lg'>
                  Custom cabinets, countertops, layouts and lighting  we create
                  kitchens that work for cooking, family life, and entertaining.
                </p>
                <div className='flex gap-4'>
                  <Link href={'/contact?type=employer'}>
                    <button className='text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-primary bg-white rounded-2xl font-semibold cursor-pointer'>
                      Schedule Design Consult
                    </button>
                  </Link>
                  <Link href={'/contact'}>
                    <button className='text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-white bg-primary rounded-2xl font-semibold cursor-pointer'>
                      Request a Call
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='w-1/12 lg:w-4/12'></div>
          </div>
        </SwiperSlide>
        {/* Slide 4 */}
        <SwiperSlide>
          <div className='flex h-auto lg:h-screen slide4Bg '>
            <div className='min-h-[380px] w-11/12 lg:w-8/12   text-white h-full p-4 py-16 lg:p-20 flex items-center'>
              <div className='w-11/12 lg:w-4/5 flex flex-col gap-5 lg:gap-4'>
                <p className='text-lg'>Floors That Last</p>
                <h2 className='text-3xl md:text-5xl xl:text-6xl font-semibold'>
                  Flooring Installation & Refinishing
                </h2>
                <p className='text-sm lg:text-lg'>
                  Hardwood, laminate, tile, and vinyl flooring installed or
                  refinished with precision for lasting beauty and performance.
                </p>
                <div className='flex gap-4'>
                  <Link href={'/about-us'}>
                    <button className='text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-primary bg-white rounded-2xl font-semibold cursor-pointer'>
                      Explore Flooring
                    </button>
                  </Link>
                  <Link href={'/contact'}>
                    <button className='text-sm md:text-base p-2 px-4 lg:p-3 lg:px-6 text-white bg-primary rounded-2xl font-semibold cursor-pointer'>
                      Get a Quote
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='w-1/12 lg:w-4/12'></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
