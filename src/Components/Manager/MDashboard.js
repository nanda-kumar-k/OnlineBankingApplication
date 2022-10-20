import background from './Images/background.png';
import banner from './Images/banner.png';
import banner2 from './Images/banner2.png';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "./slider.css";
import { Autoplay, Pagination, Navigation } from "swiper";

const SliderContainer = styled.div`
    background-image: url(${background});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    display: flex;
`;

const MLeftMenu = styled.div`
    width: 18vw;
    height: 89vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #3498db;
`;

const MRightMenu = styled.div`
    width: 82vw;
    height: 70vh;
    background-color: #F5F5F5;
`;
const Show = styled.div`
    position: relative;
    margin-top: 10vh;
      
`;
function MDashboard() {
  return (
    <>
      <SliderContainer>
        <MLeftMenu>
        </MLeftMenu>
        <MRightMenu>
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
              <SwiperSlide><img src={banner} alt="" /></SwiperSlide>
              <SwiperSlide><img src={banner2} alt="S" /></SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </Show>
    </SliderContainer>
        </MRightMenu>
      </SliderContainer>
    </>
  );
}

export default MDashboard;