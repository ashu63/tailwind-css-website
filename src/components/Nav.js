import React from "react";
import { SearchIcon, HomeIcon,BookOpenIcon, FireIcon, AtSymbolIcon, ChartBarIcon, ShoppingBagIcon } from "@heroicons/react/outline";
import NavItem from "./NavItem";

function Nav() {
  return (
    <nav className="flex justify-around font-sans p-1 px-8 items-center sticky bg-white w-full top-0 z-20">
      <div className="mr-10 text-lg items-center hidden sm:block">
        <h3> LOGO </h3>
      </div>
      <div className="flex space-x-6 sm:space-x-12 max-w-md mr-6 relative">
      <NavItem title="HOME" Icon={HomeIcon} onClick="/"/>
      <NavItem title="BLOG" Icon={BookOpenIcon} />
      <NavItem title="PORTFOLIO" Icon={FireIcon} onClick="/portfolio"/>
      <NavItem title="ABOUT" Icon={AtSymbolIcon} onClick="/about"/>
      <NavItem title="SERVICES" Icon={ChartBarIcon} onClick="/services" />
      <NavItem title="SHOP" Icon={ShoppingBagIcon} onClick="/shop" />
      <SearchIcon className="h-5 absolute -right-16 top-7 sm:top-7 text-blue-700 px-3 animate-bounce cursor-pointer sm:-right-44 "/>

      </div>
    </nav>
  );
}

export default Nav;
