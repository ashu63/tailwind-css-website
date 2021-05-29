import React, { useEffect, useState } from "react";
import products from '../data'
import ShopProducts from "./ShopProducts";


function Shop() {
  const [items, setItems] = useState(products);

  return (
    <div>
        <p className="p-24 bg-gray-100 text-3xl border-t-2">Archives: Products</p>
        <p className="p-10 md:px-20 text-4xl md:ml-40 ">Shop</p>
        <div className="md:flex justify-evenly">
          <div>
          <p className=" ml-10 md:-ml-44 text-gray-500">Showing {items.length} results</p>

          </div>
          <div className=" px-10 mt-6 md:px-20 md:mt-0">
            <select name="sort by price" className="bg-gray-100 p-2">
              <option value="hello" selected>sort by price</option>
              <option id="lowPrice" value="hello">hello</option>
              <option value="hello">hello</option>
            </select>
          </div>

        </div>
        <ShopProducts items={items}/>
    </div>
  );
}

export default Shop;
