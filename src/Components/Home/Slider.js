import background from './Images/background.png';
import banner1 from './Images/1.jpg';
import banner2 from './Images/2.jpg';
import banner3 from './Images/3.jpg';
import banner4 from './Images/4.jpg';
import banner5 from './Images/5.jpg';
import banner6 from './Images/6.jpg';
// import banner2 from './Images/img2.jpg';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
// import "./Hslider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const SliderContainer = styled.div`
    background-image: url(${background});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    /* margin-top: 11vh; */
    width: 100vw;
`;

const Show = styled.div`
      position: relative;
      margin-top: 15vh;

      .swiper {
        width: 80vw;
        height: 85vh;
        /* margin-top: 5vh; */
        margin-left: 10vw;
        margin-right: 10vw;
        }

        .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        }

        .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        }
      
`;

function Slider() {
    return (
        <>
        <SliderContainer>
            <Show>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={banner2} alt="S" /></SwiperSlide>
                <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner4} alt="S" /></SwiperSlide>
                <SwiperSlide><img src={banner5} alt="S" /></SwiperSlide>
                <SwiperSlide><img src={banner3} alt="S" /></SwiperSlide>
                <SwiperSlide><img src={banner6} alt="S" /></SwiperSlide>
            </Swiper>
            </Show>
        </SliderContainer>
    </>
    );
}

export default Slider;