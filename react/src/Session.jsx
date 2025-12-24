import react from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


const Session = () => {
    return (
        <>
            <section className="w-full flex justify-center py-10 bg-blue-100">
                <Swiper
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    className="w-full max-w-5xl h-[300px] sm:h-[300px] md:h-[360px] rounded-2xl shadow-lg overflow-hidden bg-white"
                >
                    <SwiperSlide className="flex items-center justify-center bg-blue-500">
                        <img
                            src="/imge6.avif"
                            alt="slide-1"
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>

                    <SwiperSlide className="flex items-center justify-center bg-blue-500">
                        <img
                            src="/imge2.avif"
                            alt="slide-2"
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>

                    <SwiperSlide className="flex items-center justify-center bg-blue-500">
                        <img
                            src="/imge1.avif"
                            alt="slide-3"
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>

                    <SwiperSlide className="flex items-center justify-center bg-blue-500">
                        <img
                            src="/img5.avif"
                            alt="slide-4"
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>

                    <SwiperSlide className="flex items-center justify-center bg-blue-500">
                        <img
                            src="/img4.avif"
                            alt="slide-5"
                            className="w-full h-full object-cover"
                        />
                    </SwiperSlide>


                </Swiper>
            </section>

            <section className="py-10 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Find exciting offers and best deals
                    </h1>

                    <Swiper
                        slidesPerView="auto"
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className="w-full h-[200px] sm:h-[300px] md:h-[250px]
      flex items-center rounded-2xl shadow-lg overflow-hidden bg-white"
                    >
                        <SwiperSlide className="!w-[250px] h-[150px]">
                            <img
                                src="121.webp"
                                alt=""
                                className="w-full h-full object-cover rounded-xl
          transition-transform duration-300 hover:scale-105"
                            />
                        </SwiperSlide>

                        <SwiperSlide className="!w-[250px] h-[150px]">
                            <img
                                src="121.webp"
                                alt=""
                                className="w-full h-full object-cover rounded-xl
          transition-transform duration-300 hover:scale-105"
                            />
                        </SwiperSlide>

                        <SwiperSlide className="!w-[250px] h-[150px]">
                            <img
                                src="121.webp"
                                alt=""
                                className="w-full h-full object-cover rounded-xl
          transition-transform duration-300 hover:scale-105"
                            />
                        </SwiperSlide>

                        <SwiperSlide className="!w-[250px] h-[150px]">
                            <img
                                src="121.webp"
                                alt=""
                                className="w-full h-full object-cover rounded-xl
          transition-transform duration-300 hover:scale-105"
                            />
                        </SwiperSlide>

                        <SwiperSlide className="!w-[250px] h-[150px]">
                            <img
                                src="121.webp"
                                alt=""
                                className="w-full h-full object-cover rounded-xl
          transition-transform duration-300 hover:scale-105"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>



        </>
    )
}
export default Session;