import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import Testimonial from "./Testimonial";
// import CountUp from 'react-countup';


function Service() {
  return (
    <div className="mt-3 mb-10">
      <div className="md:flex ">
        <div>
          <img
            src="https://images.pexels.com/photos/5380590/pexels-photo-5380590.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1100"
            alt=""
            className="object-contain"
            data-aos="fade-right"
          />
        </div>
        <div className="p-16 md:p-28 w-full service_icon px-24 cursor-pointer bg-black" data-aos="fade-up">
          <InstagramIcon />
          <FacebookIcon />
          <GitHubIcon />
          <p className="text-xl md:text-4xl max-w-60 mb-10 md:mb-20 mt-10 text-white " data-aos="fade-left">
            Our development consulting services
          </p>
          <div className=" max-w-xl">
            <div className="min-w-full">
              <p className="md:text-lg text-gray-400" data-aos="fade-left">
                Keeping your eye on the ball while performing a deep dive on the
                start-up mentality to derive convergence on cross-platform
                integration. Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Error, ab repellendus.
              </p>
              <button className="mt-10 bg-gray-600 transition duration-300 hover:bg-gray-700 py-4 px-5 font-bold outline-none text-white text-sm md:text-base z-10" data-aos="fade-right">
                READ MORE
              </button>
            </div>
            <div className="mt-14">
              <p className="md:text-lg text-gray-400">
                Keeping your eye on the ball while performing a deep dive on the
                start-up mentality to derive convergence on cross-platform
                integration. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Alias, repellendus.
              </p>
              <button className="mt-10 bg-gray-600 transition duration-300 hover:bg-gray-700 py-4 px-5 font-bold outline-none text-white text-sm md:text-base">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-20 flex flex-col items-center" data-aos="fade-left">
          <div className="bg-gray-200 flex flex-col items-center p-10 shadow-xl">

          <p className=" text-lg md:text-3xl mb-7">Quality Development</p>
          <p className="max-w-lg text-center md:text-xl mb-7 text-gray-600">Our experts know how to solve your company’s issues. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <button className="mt-4 bg-gray-600 transition duration-300 hover:bg-gray-700 py-4 px-5 font-bold outline-none text-white text-sm md:text-base">READ MORE</button>
          </div>

      </div>

      <div className="md:flex justify-evenly mt-20 items-center">
          <div className="p-14" data-aos="fade-right" data-aos-delay="600">
    <p className="text-xl md:text-3xl max-w-xs font-bold">Consult your product with Me</p>
    <p className="max-w-xs mt-10 text-lg">We bring deep, functional expertise, but are known for our holistic perspective: we capture value across boundaries and between the silos of any organization. We have proven a multiplier effect from optimizing the sum of the parts, not just the individual pieces.</p>
    <button className="mt-10 bg-blue-600 transition duration-300 hover:bg-blue-700 py-4 px-5 font-bold outline-none text-white text-sm md:text-base">READ MORE</button>
          </div>
          <div >
        <img src="https://scontent.fluh1-1.fna.fbcdn.net/v/t1.6435-9/91520382_1122746488089364_2769900490241081344_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=8JlWQI1m6vQAX9C1D36&_nc_ht=scontent.fluh1-1.fna&oh=f7014542805d2ec3a74deb91d40af16d&oe=60D1FD6B" alt="" className="md:h-screen object-contain" data-aos="fade-up"/>
          </div>
          <div className="md:max-w-lg p-6 md:p-14" data-aos="fade-left" data-aos-delay="600">
            <div className="bg-black p-14 text-white shadow-lg">
                <p className="text-5xl font-bold grid place-items-center mb-6 -ml-8">#1</p>
                <p>Vel fringilla est ullamcorper eget nulla facilisi. Nibh cras pulvinar mattis nunc. Massa id neque aliquam vestibulum morbi blandit.</p>
            </div>
            <div className="bg-blue-400 p-14 md:p-14 mt-10 shadow-lg ">
                <p className="text-5xl font-bold grid place-items-center mb-6 -ml-8">#2</p>
                <p>Vel fringilla est ullamcorper eget nulla facilisi. Nibh cras pulvinar mattis nunc. Massa id neque aliquam vestibulum morbi blandit.</p>
            </div>
          </div>
      </div>


<div className="flex flex-col justify-center items-center mt-20 ">
    <p className="text-lg mb-8">testimonials</p>
    <p className="text-2xl md:text-3xl mb-8">Clients Review</p>
   <Testimonial
   testimonial_image="https://scontent.fluh1-1.fna.fbcdn.net/v/t1.6435-9/p843x403/159777539_1392873111076699_3732409967816496991_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=730e14&_nc_ohc=6dXgdjpf_mwAX9VI43Y&_nc_ht=scontent.fluh1-1.fna&tp=6&oh=dc5be5ae023632ac37913652a2485c0c&oe=60D11171"
   testimonial_heading="Ashu Mehra"
   testimonial_subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sapiente."
   />
   <Testimonial
   testimonial_image="https://scontent.fluh1-1.fna.fbcdn.net/v/t1.6435-9/s851x315/121774598_1241041589604985_7611251545446276658_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=da31f3&_nc_ohc=9oxS-jV9ebgAX8Eubs9&_nc_oc=AQk92egQpUYOWyk7Aae7Zap_R8x97tQTzLn1xFa5TORiMcOBlsZgnk0gEfjXGSmR-t0&_nc_ht=scontent.fluh1-1.fna&tp=7&oh=ea82a6deada363bf2cf204370da1ca56&oe=60D1200D"
   testimonial_heading="Shivam Kashyap"
   testimonial_subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sapiente."
   />
   <Testimonial
   testimonial_image="https://scontent.fluh1-1.fna.fbcdn.net/v/t1.6435-1/p320x320/183486738_754989895176571_8456947594040651652_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Dcrh_ayi_3cAX-Kl-2_&_nc_ht=scontent.fluh1-1.fna&tp=6&oh=6a16347eeaa5d6e96e2ee6ff696e0cec&oe=60D0A073"
   testimonial_heading="Rahul Mehra"
   testimonial_subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sapiente."
   />
   <Testimonial
   testimonial_image="https://scontent.fluh1-2.fna.fbcdn.net/v/t31.18172-8/s851x315/26840609_706076556447445_610592288543578356_o.jpg?_nc_cat=110&ccb=1-3&_nc_sid=da31f3&_nc_ohc=e4TqqgqtIqwAX-O9NWi&_nc_ht=scontent.fluh1-2.fna&tp=7&oh=61bc01344ceb04f3eb2b3aeebbc47f80&oe=60D036B1"
   testimonial_heading="Prince Mehra"
   testimonial_subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, sapiente."
   />
   
</div>


    </div>
  );
}

export default Service;
