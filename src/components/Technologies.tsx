import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

type Properties = {
  spaceBetween: number
  slidesPerView: number
  technologies: Array<string>
}

export const Technologies = (properties: Properties) => {
  return <Swiper
    loop
    slidesPerView={properties.slidesPerView}
    centeredSlides={true}
    autoplay={{
      delay: 0,
      disableOnInteraction: false,
      waitForTransition: true,
    }}
    cssMode
    spaceBetween={properties.spaceBetween}
    modules={[Grid, Autoplay, Pagination]}>
    {properties.technologies.map((technology) => <SwiperSlide>
      <div className="rounded-3xl p-0.5 bg-gradient-to-r from-light-blue-500 via-blue-500 to-indigo-500">
        <div className='flex place-content-center p-8 rounded-3xl bg-base-200'>
          <p className="text-lg font-bold bg-gradient-to-r from-light-blue-500 via-blue-500 to-indigo-500 inline-block text-transparent bg-clip-text">{technology}</p>
        </div>

      </div>
    </SwiperSlide>)}
  </Swiper>
}
