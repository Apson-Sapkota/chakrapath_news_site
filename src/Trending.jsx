import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import {  Navigation ,Pagination} from 'swiper/modules';
import { trendinginfo } from './Data';

export default function App() {
  return (
    <>
    
    <div className="container trendingall py-1">
      <div className='fire'>
      <h3><i class="bi bi-fire"></i> ट्रेन्डिङ</h3>
      </div>
     
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        breakpoints={
          {
           320:{
             slidesPerView:1,
             spaceBetween:10
           },
           640:{
             slidesPerView:2,
             spaceBetween:20,
           },
           1020:{
             slidesPerView:3,
             spaceBetween:30,
           }
          }
         }
        modules={[Pagination,Navigation]}
        className="mySwiper"
      >
        {trendinginfo.map((item,index)=>(
          <SwiperSlide id={index} className='trendingslide'>
            <img src={item.img} alt="image" width="90%"/>
            <h6>{item.h6}</h6>
            <p>{item.details}</p>
          </SwiperSlide>
        ))}
        
        
      </Swiper>
      </div>
    </>
  );
}
