import React from "react";

function About() {
  return (
    <div className="md:flex bg-gray-50 relative">
      <div className="bg-gray-900 w-full px-40 flex flex-col items-center " data-aos="fade-right">
        <img
          src="https://scontent.fluh1-2.fna.fbcdn.net/v/t1.6435-0/p600x600/165676716_1405304196500257_2614390283138114313_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=kenQa4SCDFsAX9_-d8I&_nc_ht=scontent.fluh1-2.fna&tp=6&oh=3397fef6d9a2660aedbd5aee159d8692&oe=60CF7FA1"
          alt=""
          className="sm:h-56 w-60 rounded-full mt-20 -ml-6"
        />
        <img
          src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/0a3d564af83455d4935f61fd/829-8293847_jake-corman-signature-jake-signaturecopy.png"
          alt=""
          className="absolute h-40 sm:h-52 top-48"
        />
        <p className="font_change text-2xl sm:text-3xl text-white mt-28 sm:mt-32 -ml-2 sm:-ml-8">
          SAWAN MEHRA
        </p>
        <p className="text-white mt-5 sm:mt-10 -ml-3 mb-5 sm:mb-0 sm:-ml-12 text-lg">DEVELOPER</p>
      </div>
      <div className="right">
        <div className="p-24 sm:text-lg tracking-wider" data-aos="fade-left">
          <p className="text-2xl sm:text-3xl mb-5 sm:mb-10 font-bold " data-aos="fade-top" data-aos-delay="800">About Me</p>
          <p  data-aos="fade-bottom" data-aos-delay="1000">
            Podcasting operational change management inside of workflows to
            establish a framework. Taking seamless key performance indicators
            offline to maximise the long tail. Keeping your eye on the ball
            while performing a deep dive on the start-up mentality to derive
            convergence on cross-platform integration. Objectively innovate
            empowered manufactured products whereas parallel platforms.
            Holisticly predominate extensible testing procedures for reliable
            supply chains. Dramatically engage top-line web services vis-a-vis
            cutting-edge deliverables.
          </p>
        </div>
        <div className="p-24 sm:text-lg bg-gray-200 tracking-wider" data-aos="fade-left">
          <p className="text-2xl sm:text-3xl mb-10 font-bold">What I Do</p>
          <p>
            Podcasting operational change management inside of workflows to
            establish a framework. Taking seamless key performance indicators
            offline to maximise the long tail. Keeping your eye on the ball
            while performing a deep dive on the start-up mentality to derive
            convergence on cross-platform integration. Objectively innovate
            empowered manufactured products whereas parallel platforms.
            Holisticly predominate extensible testing procedures for reliable
            supply chains. Dramatically engage top-line web services vis-a-vis
            cutting-edge deliverables.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
