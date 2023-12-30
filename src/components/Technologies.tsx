import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import '../styles/swiper.css';

export enum TechnologyMode {
  languages,
  applications
}

type Properties = {
  key?: string
  spaceBetween: number
  slidesPerView: number
  technologies: Array<string>
  mode: TechnologyMode
}

export const Technologies = (properties: Properties) => <Swiper
  loop
  freeMode
  className='swiper-container'
  slidesPerView={properties.slidesPerView}
  speed={3000}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}
  spaceBetween={properties.spaceBetween}
  modules={[Grid, Autoplay, Pagination]}>
  {properties.technologies.map((technology) => <SwiperSlide>
    {properties.mode == TechnologyMode.languages
      ? <div className="rounded-3xl p-0.5 bg-gradient-to-r from-light-blue-500 via-blue-500 to-indigo-500">
        <div className='flex place-content-center p-8 rounded-3xl bg-base-200'>
          <p className="text-lg font-bold bg-gradient-to-r from-light-blue-500 via-blue-500 to-indigo-500 inline-block text-transparent bg-clip-text">{technology}</p>
        </div>
      </div>
      : <div className="rounded-3xl p-0.5 bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500">
        <div className='flex place-content-center p-8 rounded-3xl bg-base-200'>
          <p className="text-lg font-bold bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 inline-block text-transparent bg-clip-text">{technology}</p>
        </div>
      </div>}
  </SwiperSlide>)}
</Swiper>
