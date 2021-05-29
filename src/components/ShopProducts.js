import React from 'react'

function ShopProducts({items}) {
    return (
        <div className="flex flex-wrap justify-center mt-10 max-w-4xl md:ml-44 -ml-4">
            {items.map((item) => {
                const {id, productImage, productName, productPrice} = item;
                return <div key={id} className="ml-3 mb-10">
                    <img src={productImage} alt="" className="h-48 object-contain" />
                    <div className="pt-6 px-2">

                    <p className="text-xl">{productName}</p>
                    <p className="text-gray-400 pt-4">${productPrice}</p>
                    <button className="bg-gray-400 transition duration-300 hover:bg-blue-700 py-2 md:py-3 px-4 md:px-8 mt-6 text-white font-bold outline-none">Add to cart</button>
                    </div>

                </div>
            })}
            
        </div>
    )
}

export default ShopProducts
