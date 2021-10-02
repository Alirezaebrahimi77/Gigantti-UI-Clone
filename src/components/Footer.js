import React from "react";
import FooterCard from "./FooterCard";
import { FooterCardData } from "./FooterCardData";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { usefulData, aboutGigantti, socialData } from "../data/footerData";
import { SearchIcon } from "@heroicons/react/outline";


function Footer() {
  return (
    <div className="w-full h-auto bg-gray-200 border-t-4 border-gigGreen">
      <div className="flex items-center flex-wrap p-6">
        {FooterCardData?.map((item) => (
          <FooterCard key={item.id} img={item.img} text={item.text} />
        ))}
      </div>
      <div className="flex flex-col md:flex-row md:pl-10 md:pt-16 justify-start md:pr-10">
        <div className="flex flex-col md:flex-row flex-1">
          <div className="md:mr-5 mb-5">
            <Link to="/hyodyllista-tietoa">
              <h2 className="font-bold text-md text-blue-900 mb-2 hover:underline border-b-2 border-gray-300 py-2 pl-5 md:border-none">
                Hyödyllistä tietoa
              </h2>
            </Link>
            {usefulData.map((item) => (
              <Link to={item.path}>
                <p className="text-sm leading-7 hover:opacity-30 hover:underline py-2 border-b-2 border-gray-300 pl-5 md:border-none">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
          <div className="">
            <Link to="tietoa-gigantista">
              <h2 className="font-bold text-md text-blue-900 mb-2 hover:underline border-b-2 border-gray-300 py-2 pl-5 md:border-none">
                Tietoa Gigantista
              </h2>
            </Link>
            {aboutGigantti.map((item) => (
              <Link to={item.path}>
                <p className="text-sm leading-7 hover:opacity-30 hover:underline py-2 border-b-2 border-gray-300 pl-5 md:border-none">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-start mt-10 ml-5">
          <div className="">
            <input
              type="text"
              placeholder="Myymälähaku"
              className="px-2 py-3 shadow-inner outline-none"
            />
          </div>
          <div className="flex items-center bg-gigGreen ml-4 p-3 rounded-md shadow-md">
            <span>Hae</span>
            <SearchIcon className="h-4 ml-1" />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full bg-white mt-5 py-5 px-3">
        <div className="flex justify-between w-full md:w-auto">
            {socialData.map(item => (
                <div className="relative w-12 h-12 mx-5">
                <Link to={`${item.path}/gigantti`}>
                  <img src={item.img} alt="" className="w-full h-full object-contain"/>
                </Link>
              </div>

            ))}
        </div>
      </div>
      
      <div className="bg-gigBlue text-white text-center py-5 md:py-4">
          <p className="text-sm">©2021 Gigantti. Kaikki oikeudet pidätetään. Asiakaspalvelu puh: 020-321321 (8,4snt/min).</p>
      </div>
    </div>
  );
}

export default Footer;
