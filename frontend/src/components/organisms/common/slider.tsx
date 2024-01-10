import React from 'react'
import img1 from '../../../assets/スライド1.png'
import img2 from '../../../assets/スライド2.png'
import img3 from '../../../assets/スライド3.png'
import img4 from '../../../assets/スライド4.png'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

const Slider = React.memo((props: any) => {
    console.log(props.tagList)
    return (
        <>
            <Swiper
                spaceBetween={200}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className={`slide ${props.tagList['active-'+1].isSelected ? 'active' : ''}`} data-imgsrc={ img1 } onClick={ (e:any) => props.clickFunc('active-'+1,e) }>
                        <div className='title'>
                            <span className='label'>作品名</span><span className='name'>サンプル作品1</span>
                        </div>
                        <div className='production-period'>
                            <span className='label'>制作期間</span><span className='date'>yyyy/mm/dd ~ yyyy/mm/dd</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`slide ${props.tagList['active-'+2].isSelected ? 'active' : ''}`} data-imgsrc={ img2 } onClick={ (e:any) => props.clickFunc('active-'+2,e) }>
                        <div className='title'>
                            <span className='label'>作品名</span><span className='name'>サンプル作品2</span>
                        </div>
                        <div className='production-period'>
                            <span className='label'>制作期間</span><span className='date'>yyyy/mm/dd ~ yyyy/mm/dd</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`slide ${props.tagList['active-'+3].isSelected ? 'active' : ''}`} data-imgsrc={ img3 } onClick={ (e:any) => props.clickFunc('active-'+3,e) }>
                        <div className='title'>
                            <span className='label'>作品名</span><span className='name'>サンプル作品3</span>
                        </div>
                        <div className='production-period'>
                            <span className='label'>制作期間</span><span className='date'>yyyy/mm/dd ~ yyyy/mm/dd</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`slide ${props.tagList['active-'+4].isSelected ? 'active' : ''}`} data-imgsrc={ img4 } onClick={ (e:any) => props.clickFunc('active-'+4,e) }>
                        <div className='title'>
                            <span className='label'>作品名</span><span className='name'>サンプル作品4</span>
                        </div>
                        <div className='production-period'>
                            <span className='label'>制作期間</span><span className='date'>yyyy/mm/dd ~ yyyy/mm/dd</span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={`slide ${props.tagList['active-'+1].isSelected ? 'active' : ''}`} data-imgsrc={ img1 } onClick={ (e:any) => props.clickFunc('active-'+1,e) }>
                        <div className='title'>
                            <span className='label'>作品名</span><span className='name'>サンプル作品1</span>
                        </div>
                        <div className='production-period'>
                            <span className='label'>制作期間</span><span className='date'>yyyy/mm/dd ~ yyyy/mm/dd</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`slide ${props.tagList['active-'+2].isSelected ? 'active' : ''}`} data-imgsrc={ img2 } onClick={ (e:any) => props.clickFunc('active-'+2,e) }>
                        <div className='title'>
                            <span className='label'>作品名</span><span className='name'>サンプル作品2</span>
                        </div>
                        <div className='production-period'>
                            <span className='label'>制作期間</span><span className='date'>yyyy/mm/dd ~ yyyy/mm/dd</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`slide ${props.tagList['active-'+3].isSelected ? 'active' : ''}`} data-imgsrc={ img3 } onClick={ (e:any) => props.clickFunc('active-'+3,e) }>
                        <div className='title'>
                            <span className='label'>作品名</span><span className='name'>サンプル作品3</span>
                        </div>
                        <div className='production-period'>
                            <span className='label'>制作期間</span><span className='date'>yyyy/mm/dd ~ yyyy/mm/dd</span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`slide ${props.tagList['active-'+4].isSelected ? 'active' : ''}`} data-imgsrc={ img4 } onClick={ (e:any) => props.clickFunc('active-'+4,e) }>
                        <div className='title'>
                            <span className='label'>作品名</span><span className='name'>サンプル作品4</span>
                        </div>
                        <div className='production-period'>
                            <span className='label'>制作期間</span><span className='date'>yyyy/mm/dd ~ yyyy/mm/dd</span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
})
  
export default Slider