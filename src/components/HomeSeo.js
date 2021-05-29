import React from 'react'

function HomeSeo({homeSeoImg, homeSeoHeading, homeSeoContent, homeSeoButton, isReverse}) {
    return (
             <div className={`flex items-center p-10 flex-wrap justify-evenly ${isReverse && "flex-row-reverse"}`}>
            <img src={homeSeoImg} alt="" className=" h-96" data-aos="fade-right" data-aos-delay="500"/>
            <div className="" data-aos="fade-left" data-aos-delay="500">
                <p  className="text-4xl p-2">{homeSeoHeading}</p>
                <p  className="max-w-md p-2 text-gray-500 leading-normal text-sm sm:text-base">{homeSeoContent}</p>
                <button className="bg-purple-600 hover:bg-purple-700 transition duration-200 text-white py-4 px-14 m-3 my-6 font-semibold">{homeSeoButton}</button>
            </div>
        </div>
    )
}

export default HomeSeo
