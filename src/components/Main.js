import React from 'react'
import {catData} from './catData';
import { CheckIcon } from "@heroicons/react/outline";
import banner from "../images/banner.webp";
import {disData} from './disData';
import Discount from './Discount';
import horizontalBanner from "../images/horizontalBanner.png";
import miniBanner1 from "../images/miniBanner1.webp";
import miniBanner2 from "../images/miniBanner2.webp";
import miniBanner3 from "../images/miniBanner3.webp";
import miniBanner4 from "../images/miniBanner4.webp";
import miniBanner5 from "../images/miniBanner5.webp";
import middleBigBanner from "../images/middleBigBanner.webp";
import {productData} from "./productData";
import Product from './Product';

function Main() {

    
    return (
        <main className="flex h-full bg-white shadow-2xl">
            <aside className="flex flex-col hidden md:block w-1/5 h-full bg-white border-r-2">
                <div className="text-center py-2 bg-gray-200"><p className="font-semibold text-md">Tuoteryhmät</p></div>
                
                <div className="border-b-2">

                {catData.map((item)=>(
                    <p className="px-2 py-3 hover:bg-gigGreen cursor-pointer text-sm">{item.name}</p>

                ))}
                </div>

            </aside>
            <div className="w-full bg-white px-2">
                <div className="flex justify-end text-center py-2">
                    <div className="flex items-center cursor-pointer">
                        <CheckIcon className="text-gigGreen h-5 text-semibold"/>
                        <span className="text-sm">Toimitukset jopa samana päivänä</span>
                    </div>
                    <div className="flex items-center ml-3 cursor-pointer">
                        <CheckIcon className="text-gigGreen h-5 text-semibold"/>
                        <span className="text-sm">Toimitukset jopa samana päivänä</span>
                    </div>
                </div>


                <div className="relative py-2 w-full h-5/5">
                    <img src={banner} alt="" className="w-full h-full object-cover"/>

                </div>

                <section className="flex flex-col md:flex-row py-4">
                    {disData.map((item) => (
                        <Discount img={item.img} text={item.text}/>
                    ))}
                    
                </section>
                <section className="px-2">
                    <img src={horizontalBanner} alt="" />
                </section>

                <section className="py-4 grid grid-cols-3 md:grid-cols-5">
                    <div className="hover:opacity-80 cursor-pointer m-2"><img src={miniBanner1} alt="" /></div>
                    <div className="hover:opacity-80 cursor-pointer m-2"><img src={miniBanner2} alt="" /></div>
                    <div className="hover:opacity-80 cursor-pointer m-2"><img src={miniBanner3} alt="" /></div>
                    <div className="hover:opacity-80 cursor-pointer m-2"><img src={miniBanner4} alt="" /></div>
                    <div className="hover:opacity-80 cursor-pointer m-2"><img src={miniBanner5} alt="" /></div>
                    
                </section>
                <section className="px-2">
                    <img src={middleBigBanner} alt="" />
                </section>
                <section className="mx-2 my-2 h-scree flex flex-col md:flex-row flex-wrap">
                    {productData.map((item) => (
                        <Product
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        img={item.img}
                        star={item.star}
                        stock={item.stock}
                        hasDiscount={item.hasDiscount}
                        normalPrice={item.normalPrice}
                        discountPrice={item.discountPrice}
                        energyClass={item.energyClass}
                        feature1={item.feature1}
                        feature2={item.feature2}
                        feature3={item.feature3}
                        discountValid={item.discountValid}
                        />

                    ))}
                    
                </section>






            </div>
            
        </main>
        
    )
}

export default Main
