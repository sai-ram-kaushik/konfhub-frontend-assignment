import React from "react";
import footerImage from '/footer-logo.png'

const Footer = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center w-full">
        <img src={footerImage} width={200} height={200}/>
      </div>
    </div>
  );
};

export default Footer;
