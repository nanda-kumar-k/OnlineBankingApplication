import background from './Images/background.png';
import banner1 from './Images/1.jpg';
import banner2 from './Images/2.jpg';
import banner3 from './Images/3.jpg';
import banner4 from './Images/4.jpg';
import banner5 from './Images/5.jpg';
import banner6 from './Images/6.jpg';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { Autoplay, Pagination, Navigation } from "swiper";
import Menubar from '../Navbar/Menubar';
// import "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap";

export const SliderContainer = styled.div`
    /* margin-top: 11vh; */
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
    overflow: scroll;
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
      margin-top: 5vh;

      .swiper {
        width: 70vw;
        height: 70vh;
        /* margin-top: 5vh; */
        margin-left: 5vw;
        margin-right: 5vw;
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
        h1{
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
        font-size: 2.5rem;
        text-align: center;
        margin-bottom: 2vh;
    }
      
`;


function Dashboard() {
  return (
    <>
      <SliderContainer>
        <MLeftMenu>
            <Menubar/>
        </MLeftMenu>
        <MRightMenu>
            
            <SliderContainer>
                
              <Show>
              <h1>Dashboard</h1>
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
        </MRightMenu>
      </SliderContainer>
    </>
  );
}

export default Dashboard;