import Image from "next/image";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./index.module.css";

//types
import { itemSlideshowType } from '@/app/types/components';

export const ItemSlideshow = (props: itemSlideshowType) => {
  const {
    list, className, keyName,
  } = props;
  return (
    0 < list.length && (
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)} className={className}
      >
        {
          list.map((item, index) => {
            return (
              <SwiperSlide key={`image-slideshow-${index}`}>
                <Image
                  src={item.url}
                  width={Number(item.width)}
                  height={Number(item.height)}
                  alt="" />
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    )
  )
}