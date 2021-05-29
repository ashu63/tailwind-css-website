import React from "react";

function NavItem({ Icon, title, onClick }) {
  return (
      <div className="flex flex-col items-center group cursor-pointer w-8 sm:w-20">
      <a href={onClick}><Icon className="h-6 mt-5 sm:mt-0 text-gray-500 sm:opacity-0 group-hover:text-blue-600" /></a>
        <a href={onClick} className="opacity-0 sm:opacity-100 tracking-widest sm:mb-7 hover:text-blue-600 text-xs font-bold ">
         {title}
          </a>
           
          </div>
      
  );
}

export default NavItem;
