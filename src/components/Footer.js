import React from 'react';
import FooterCard from './FooterCard';
import {FooterCardData} from './FooterCardData';

function Footer() {
    return (
        <div className="w-full h-screen bg-gray-200 border-t-4 border-gigGreen p-2">
            <div className="flex items-center flex-wrap p-6">
                {FooterCardData?.map(item =>(
                    <FooterCard key={item.id} img={item.img} text={item.text} />
                ))}
                

            </div>
            
        </div>
    )
}

export default Footer
