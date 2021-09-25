import React from 'react'

function FooterCard({img, text}) {
    return (
        <div className="group flex flex-col items-center justify-center w-1/2 md:w-1/4">
            <a href="" className="flex flex-col items-center my-2">
                <div className="h-14 w-14 relative md:h-10 md:w-10 lg:w-14 lg:h-14 xl:w-20 xl:h-20">
                    <img src={img} alt="" className="w-full h-full object-contain"/>
                </div>
                <p className="text-sm underline group-hover:no-underline">{text}</p> 
            </a>
        </div>
    )
}

export default FooterCard
