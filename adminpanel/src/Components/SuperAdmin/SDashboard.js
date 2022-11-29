import background from './Images/background.png';
import banner from './Images/banner.png';
import banner2 from './Images/banner2.png';
import Menubar from '../Navbar/Menubar'
import styled from 'styled-components';
import { Swiper as MMSwiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "./Mslider.css";
import { Autoplay, Pagination, Navigation } from "swiper";
// import "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap";

export const SliderContainer = styled.div`
    background-image: url(${background});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
    /* position: absolute; */
    width: 100%;
    height: 70vh;
    display: flex;
`;

export const MLeftMenu = styled.div`
    width: 13vw;
    height: 77vh;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #3498db;
    padding: 10vh 1vw 2vh 1vw;
    /* display: flex; */
    justify-content: center;
    /* flex-wrap: wrap; */
    
`;

export const MRightMenu = styled.div`
    width: 85vw;
    height: 70vh;
    background-color: #F5F5F5;
`;
const Show = styled.div`
    position: relative;
    margin-top: 10vh;    
`;

const MSwiper = styled(MMSwiper)`
    width: 70vw;
    height: 70vh;
    margin: 0 6vw 0 6vw;
`;

function SDashboard() {
  return (
    <>
      <SliderContainer>
        <MLeftMenu>
            <Menubar/>
        </MLeftMenu>
        <MRightMenu>
            <SliderContainer>
              <Show>
                <MSwiper
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
                </MSwiper>
              </Show>
          </SliderContainer>
        </MRightMenu>
      </SliderContainer>
    </>
  );
}

export default SDashboard;