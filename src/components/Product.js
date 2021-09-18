/* eslint-disable jsx-a11y/anchor-is-valid */
import { ListItemAvatar } from "@material-ui/core";
import React from "react";
import { ChevronRightIcon, SwitchHorizontalIcon, ArrowSmRightIcon } from "@heroicons/react/outline";
function Product({
  id,
  title,
  img,
  star,
  stock,
  hasDiscount,
  normalPrice,
  discountPrice,
  energyClass,
  feature1,
  feature2,
  feature3,
  discountValid,
}) {

  

  return (
    <div className="flex flex-col shadow-md p-3 md:w-1/2 md:shadow-none lg:w-1/3 group lg:hover:shadow-xl transition duration-300 ease-in-out singleCard relative z-10 lg:pb-0 xl:w-1/4 lg:relative lg:overflow-visible lg:z-10">
      <div className="flex justify-between">
        <span className="hidden md:block opacity-0 text-xs cardId">{id}</span>
        <span className="text-xs font-semibold -ml-3 p-2 bg-gigYellow">
          NORM. {normalPrice}€
        </span>
      </div>
      <div className="flex border-b-2 pb-2 md:flex-col">
          <div className="flex flex-col w-3/6 md:w-full">
            <div className="relative h-44 hover:opacity-80 cursor-pointer">
                <img src={img} alt="" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="text-xs text-gray-500 md:hidden">Keskusvarastossa({stock}+)</p>
            </div>

          </div>
        
        <div className="flex flex-col w-3/6 md:w-full md:text-center">
          <div className="flex flex-col justify-center flex-grow">
            <p className="font-semibold text-md text-gray-700 hover:underline cursor-pointer md:text-sm md:py-2 md:text-gray-500">{title}</p>
            <p className="font-semibold text-xs">stars {star}</p>
          </div>
          <div className="flex max-w-full">
              <div className="flex flex-col w-4/6 md:items-center md:w-full md:pt-3">
              <p className="font-bold text-3xl text-gray-700 md:font-normal md:text-md">{discountPrice}</p>
              <p className="text-xs">Esittelytuote / asiakaspalautus alk. 261</p>

              </div>
              <div className="flex flex-col w-2/6 py-2 md:hidden">
                  <p className="text-xs underline cursor-pointer text-gray-700 hover:no-underline">Energialuokka</p>
                  <img src="" alt="" />
              </div>
          </div>
        </div>
      </div>
      
      <div className="w-full md:flex flex-col-reverse group">
          <div className="py-2 lg:hidden features">
                
                <p className="flex items-center text-gray-700 inline-block text-xs py-1"><ChevronRightIcon className="h-4"/>{feature1}</p>
                <p className="flex items-center text-gray-700 inline-block text-xs py-1"><ChevronRightIcon className="h-4"/>{feature2}</p>
                <p className="flex items-center text-gray-700 inline-block text-xs py-1"><ChevronRightIcon className="h-4"/>{feature3}</p>
                <div>
                    <p className="hidden md:block text-xs text-black font-semibold mt-4 mb-0 lg:bg-gray-200 lg:p-1 lg:text-xs text-center">{`TARJOUS VOIMASSA SU ${discountValid}. ASTI`}</p>
                </div>

          </div>
          <div className="px-1 py-2 flex justify-end">
              <p className="hidden md:block text-xs text-gray-500">Keskusvarastossa({stock}+)</p>
          </div>
          <div className="flex items-center border-t-2 border-b-2 py-1 md:border-t-0 md:py-3 lg:hidden desktopCardButtons">
              <a href="" className="flex items-center w-1/2 transition duration-500 ease-in-out text-xs font-semibold text-gray-700 justify-center hover:bg-gigGreen py-1 mx-1 rounded-md md:py-3 md:rounded-md md:rounded-md"><SwitchHorizontalIcon className="h-3 mr-1"/>Vertaile</a>
              <a href="" className="group flex items-center w-1/2 text-xs font-semibold text-gray-700 justify-center py-1 border-l-2 md:border-l-0 md:bg-gigGreen md:py-3 md:rounded-md md:shadow-md">Lisätietoa <ChevronRightIcon className="h-3"/></a>
                
          </div>
          <div>
              <p className="text-xs text-gray-500 my-1 md:hidden">{`TARJOUS VOIMASSA SU ${discountValid}. ASTI`}</p>
          </div>
      </div>
    </div>
  );
}

export default Product;
