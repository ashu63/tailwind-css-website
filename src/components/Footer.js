import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white p-10 md:p-16 flex items-center justify-evenly">
        <p className="flex whitespace-nowrap text-xs md:text-base -ml-10">
          Made by Sawan Mehra with Love{" "}
          <span className="ml-2 mr-3 font-bold"> |</span>All rights reserved
        </p>
        <div className="footerIcons  cursor-pointer flex whitespace-nowrap ml-4">
          <InstagramIcon />
          <FacebookIcon />
          <GitHubIcon />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
