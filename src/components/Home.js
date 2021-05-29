import React from "react";
import "../style/Home.css";
import HomeSeo from "./HomeSeo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

SwiperCore.use([Autoplay, Pagination, Navigation]);

function Home() {
  return (
    <div>
      <section className="bacImage ">
        <main className="flex flex-col items-center justify-center h-5/6  ">
          <p className="text-3xl text-white md:text-5xl lg:text-6xl whitespace-nowrap tracking-wide" data-aos="fade-up">
            I Change Everything WordPress
          </p>
          <p className="text-white max-w-sm text-center sm:max-w-xl p-8">
            This is the only WordPress theme you will ever want to use.
          </p>
          <div className="text-white p-1 " data-aos="fade-down">
            <button className="mr-3 bg-purple-600 transition duration-300 hover:bg-purple-700 py-4 px-16 font-bold outline-none" >
              Read More
            </button>
            <button className="border-2 border-white transition duration-200 hover:bg-white hover:text-black py-3.5 px-10 font-bold outline-transparent">
              Download Now
            </button>
          </div>
        </main>
      </section>

      <section className="seo">
        <HomeSeo
          homeSeoImg="https://demo.colorlib.com/wp-content/uploads/sites/59/2016/03/macbook-preview-flexible.png"
          homeSeoHeading="SEO Friendly"
          homeSeoContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies."
          homeSeoButton="READ MORE"
        />
        <div className="bg-gray-100 mt-20 pt-20">
          <HomeSeo
            homeSeoImg="https://demo.colorlib.com/wp-content/uploads/sites/59/2016/03/flexible-portfolio.png"
            homeSeoHeading="Portfolio Section"
            homeSeoContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies."
            homeSeoButton="SEE IT IN ACTION"
            isReverse
          />
        </div>
      </section>

      <section className="parallax mt-20 sm:mt-40 bg-scroll sm:bg-fixed h-full">
        <div className="flex flex-col justify-center items-center h-full" data-aos="fade-up-left" data-aos-delay="500">
          <p className="text-2xl md:text-6xl p-8 text-white">
            Small Parallax Section
          </p>
          <p className="max-w-md md:max-w-3xl text-white text-center py-5 px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            imperdiet rhoncus porta. Ut quis sem quis purus lobortis dictum.
            Aliquam nec dignissim nisl. Vivamus cursus feugiat sapien, eget
            tincidunt leo ornare quis.
          </p>
          <button className="border-2 border-white transition duration-200 hover:bg-white hover:text-black py-3.5 px-10 font-bold outline-transparent text-white text-sm">
            MORE INFO
          </button>
        </div>
      </section>

      <section className="limitless mt-20 sm:mt-40">
        <div className="flex flex-col items-center" data-aos="fade-left">
          <p className="text-3xl md:text-4xl p-2">Limitless Options</p>
          <p className="p-4 max-w-md md:max-w-3xl text-center justify-center text-gray-400">
            Phasellus sed nisi ac dui interdum semper. Etiam consequat fermentum
            sollicitudin. Fusce vulputate porta faucibus. Vivamus nulla tellus,
            accumsan non efficitur id, pretium quis ante
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 transition duration-200 text-white py-4 px-12 m-3 my-6 font-semibold">
            DOWNLOAD NOW
          </button>
        </div>

        <div className="mt-32">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
                "delay": 3500,
                "disableOnInteraction": false
              }}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <p className=" text-xl md:text-3xl p-2 text-white">
                What Our Customers Say
              </p>
              <p className="text-sm md:text-base pt-10 max-w-sm md:max-w-2xl text-white">
                Nunc sit amet lobortis nulla. Nunc ullamcorper, mi id luctus
                dictum, augue tortor dictum ipsum, nec congue arcu lorem in
                nisl. Duis neque lacus, viverra non mauris ac, pharetra rhoncus
                libero. Aliquam varius viverra ex, in venenatis magna ornare sit
                amet. Integer varius sit amet turpis eu ullamcorper.
              </p>
              <img
                src="https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/Aigars-Silkalns-150x150.jpg"
                alt=""
                className="rounded-full mt-10"
              />
              <p className="pt-2 font-bold text-white">Johnson ray</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className=" text-xl md:text-3xl p-2 text-white">
                What Our Customers Say
              </p>
              <p className="text-sm md:text-base pt-10 max-w-sm md:max-w-2xl text-white">
                Nunc sit amet lobortis nulla. Nunc ullamcorper, mi id luctus
                dictum, augue tortor dictum ipsum, nec congue arcu lorem in
                nisl. Duis neque lacus, viverra non mauris ac, pharetra rhoncus
                libero. Aliquam varius viverra ex, in venenatis magna ornare sit
                amet. Integer varius sit amet turpis eu ullamcorper.
              </p>
              <img
                src="https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/mike-muller-150x150.jpg"
                alt=""
                className="rounded-full mt-10"
              />
              <p className="pt-2 font-bold text-white">Johnson ray</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className=" text-xl md:text-3xl p-2 text-white">
                What Our Customers Say
              </p>
              <p className="text-sm md:text-base pt-10 max-w-sm md:max-w-2xl text-white">
                Nunc sit amet lobortis nulla. Nunc ullamcorper, mi id luctus
                dictum, augue tortor dictum ipsum, nec congue arcu lorem in
                nisl. Duis neque lacus, viverra non mauris ac, pharetra rhoncus
                libero. Aliquam varius viverra ex, in venenatis magna ornare sit
                amet. Integer varius sit amet turpis eu ullamcorper.
              </p>
              <img
                src="https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/Aigars-Silkalns-150x150.jpg"
                alt=""
                className="rounded-full mt-10"
              />
              <p className="pt-2 font-bold text-white">Johnson ray</p>
            </SwiperSlide>
            <SwiperSlide>
              <p className=" text-xl md:text-3xl p-2 text-white">
                What Our Customers Say
              </p>
              <p className="text-sm md:text-base pt-10 max-w-sm md:max-w-2xl text-white">
                Nunc sit amet lobortis nulla. Nunc ullamcorper, mi id luctus
                dictum, augue tortor dictum ipsum, nec congue arcu lorem in
                nisl. Duis neque lacus, viverra non mauris ac, pharetra rhoncus
                libero. Aliquam varius viverra ex, in venenatis magna ornare sit
                amet. Integer varius sit amet turpis eu ullamcorper.
              </p>
              <img
                src="https://demo.colorlib.com/shapely/wp-content/uploads/sites/59/2016/03/Aigars-Silkalns-150x150.jpg"
                alt=""
                className="rounded-full mt-10"
              />
              <p className="pt-2 font-bold text-white">Johnson ray</p>
            </SwiperSlide>
          </Swiper>

        </div>
      </section>

      <div className="mt-15 flex justify-evenly py-14 items-center">
          <p className="text-md sm:text-3xl text-gray-700">Do you like this awesome website ?</p>
          <button className="bg-gray-600 hover:bg-gray-800 transition duration-200 text-white py-3 px-7 md:py-4 md:px-12 font-semibold text-xs md:text-base ml-7">FOLLOW ME</button>
      </div>

  
    </div>
  );
}

export default Home;
