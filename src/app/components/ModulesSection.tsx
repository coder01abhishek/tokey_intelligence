'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { getAssetUrl } from '../config/assets';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const modules = [
  {
    id: 1,
    title: 'Consciousness',
    subtitle: 'Personality, desired model, etc.',
    icon: (<img src={getAssetUrl("/assets/gifs/consciousness.gif")} alt="Consciousness Icon" width="98" height="98" />),
  },
  {
    id: 2,
    title: 'Speech',
    subtitle: 'Speech synthesis',
    icon: (<img src={getAssetUrl("/assets/gifs/speech.gif")} alt="Speech Icon" width="98" height="98" />),
  },
  {
    id: 3,
    title: 'Hearing',
    subtitle: 'Configure how speech recognition works',
    icon: (<img src={getAssetUrl("/assets/gifs/hearing.gif")} alt="Hearing Icon" width="98" height="98" />),
  },
  {
    id: 4,
    title: 'Consciousness',
    subtitle: 'Personality, desired model, etc.',
    icon: (<img src={getAssetUrl("/assets/gifs/consciousness.gif")} alt="Consciousness Icon" width="98" height="98" />),
  },
  {
    id: 5,
    title: 'Speech',
    subtitle: 'Speech synthesis',
    icon: (<img src={getAssetUrl("/assets/gifs/speech.gif")} alt="Speech Icon" width="98" height="98" />),
  },
  {
    id: 6,
    title: 'Hearing',
    subtitle: 'Configure how speech recognition works',
    icon: (<img src={getAssetUrl("/assets/gifs/hearing.gif")} alt="Hearing Icon" width="98" height="98" />),
  },
];

const ModulesSection = () => {
  return (
    <div className="w-full max-w-full md:max-w-6xl mx-auto text-white mb-12">
      <h2 className="text-center mb-2">Modules</h2>
      <p className="text-center text-[#A0A0A0] mb-8">
        Thinking, vision, speech synthesis, gaming, etc.
      </p>
      {/* Mobile Slider */}
      <div className="block md:hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          speed={2500}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.8,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3.5,
            }
          }}
          // pagination={{ clickable: true }}
          loop={true}
          className="mySwiper w-full"
        >
          {modules.map(({ id, title, subtitle, icon }) => (
            <SwiperSlide key={id}>
              <div className="backdrop-blur-2xl bg-gradient-to-tl from-white/5 via-white/2 to-transparent border border-[2px] border-gray-600/15 rounded-2xl  overflow-hidden
  p-6 flex flex-col items-center gap-4 min-h-[280px]">
                <div className="w-[98px] h-[98px] flex items-center justify-center">{icon}</div>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-sm text-[#A0A0A0] leading-5">{subtitle}</p>
                </div>
                <div>
                  <span className="inline-block border border-green-500 text-green-500 rounded-full px-3 py-1 text-xs font-semibold tracking-wide">
                    LIVE
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop and Tablet Layout */}
      <div className="hidden md:block">
        {modules.length > 3 ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false
            }}
            speed={2500}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            className="mySwiper w-full"
          >
            {modules.map(({ id, title, subtitle, icon }) => (
              <SwiperSlide key={id}>
                <div className="backdrop-blur-2xl bg-gradient-to-tl from-white/5 via-white/2 to-transparent border border-[2px] border-gray-600/15 rounded-2xl  overflow-hidden
  p-6 flex flex-col items-center gap-4 sm:min-h-[313px] min-h-[280px]">
                  <div className="h-[138px] w-[138px] flex items-center justify-center">{icon}</div>
                  <div className="text-center">
                    <h3 className="font-bold text-lg mb-2">{title}</h3>
                    <p className="text-sm text-[#A0A0A0] leading-5">{subtitle}</p>
                  </div>
                  <div>
                    <span className="inline-block border border-green-500 text-green-500 rounded-full px-3 py-1 text-xs font-semibold tracking-wide">
                      LIVE
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="flex justify-center gap-8">
            {modules.map(({ id, title, subtitle, icon }) => (
              <div
                key={id}
                className="backdrop-blur-2xl bg-gradient-to-tl from-white/5 via-white/2 to-transparent border border-[2px] border-gray-600/15 rounded-2xl  overflow-hidden
  p-6 flex flex-col items-center gap-4 min-w-[300px] min-h-[250px]"
              >
                <div className="h-[138px] w-[138px] flex items-center justify-center">{icon}</div>
                <div className="text-center">
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-sm text-[#A0A0A0] leading-5">{subtitle}</p>
                </div>
                <div>
                  <span className="inline-block border border-green-500 text-green-500 rounded-full px-3 py-1 text-xs font-semibold tracking-wide">
                    LIVE
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ModulesSection;
