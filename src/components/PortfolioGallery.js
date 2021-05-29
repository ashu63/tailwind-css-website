import React from 'react'
import '../style/PortfolioGallery.css'

function PortfolioGallery({portfolioImage,portfolioContent}) {
    return (
        <div className="PortfolioGallery mt-10 h-64 mr-5 " data-aos="fade-right">
            <img src={portfolioImage} alt=""  />
            <div className="overlay ">
                <p className="text-white text-sm md:text-xl">{portfolioContent}</p>
            </div>
        </div>
    )
}

export default PortfolioGallery
