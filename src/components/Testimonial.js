import React from 'react'

function Testimonial({testimonial_image, testimonial_heading, testimonial_subHeading}) {
    return (
             <div className="flex bg-gray-200 px-10 py-7 items-center mb-3 transition duration-300 group hover:bg-blue-400 cursor-pointer shadow-md max-w-sm md:max-w-4xl"  data-aos="fade-right">
        <div>
            <img src={testimonial_image} alt="" className="h-16 w-48 md:h-36 md:w-36 rounded-full" />
        </div>
        <div className="px-12">
            <p className="text-lg font-bold mb-3">{testimonial_heading}</p>
            <p className="md:text-lg max-w-md text-gray-600 group-hover:text-black">{testimonial_subHeading}</p>
        </div>
    </div>
    )
}

export default Testimonial
