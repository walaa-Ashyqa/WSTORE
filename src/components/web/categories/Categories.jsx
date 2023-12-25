import React from 'react'
import {
  useQuery,
} from 'react-query';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './Categories.css';
import axios from "axios"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
function Categories() {
  const getCategories = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/categories/active`)
    return data
  }
  const { data, isLoading } = useQuery('web_categories', getCategories)
  console.log(data?.categories)
  console.log(isLoading)
 
  if (isLoading) {
    return (
      <div className='container p-5'>
        <h3>Shop By Category</h3>
        <div className="row py-4">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='container p-5 '>
      <h4 className='mb-4'>Shop By Category</h4>
     

<Swiper
 modules={[Navigation, Pagination, Scrollbar, Autoplay ,A11y]}
       spaceBetween={50}
       slidesPerView={4}
       navigation
       loop={true}
       autoplay={{delay:1000}}
       pagination={{ clickable: true }}
       onSlideChange={() => console.log('slide change')}
       onSwiper={(swiper) => console.log(swiper)}
     >
      {data?.categories.length? data.categories.map((category)=>
      
      <SwiperSlide  key={category._id}>
        <Link to={`/products/category/${category._id}`}>
        <img className='slid-img' src={category.image.secure_url}/>
        </Link>
      </SwiperSlide>
      ):'<h2>no category found</h2>'}
      </Swiper>
     
    </div>
      
  )
}

export default Categories