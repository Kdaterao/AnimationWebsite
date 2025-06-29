'use client'
import React from 'react';
import { useState } from 'react';


function Dark_Switch(){
    const [Darkstate,changestate] = useState<Boolean>(false);
    return(

        <div className ='h-5 w-15 md:h-8 md:w-20 relative '>
            <label className ={`h-full w-full relative  rounded-full flex flex-none ${Darkstate ? 'bg-green-300 opacity-50' : 'bg-none outline-1 opacity-90'}`}>
                <input type="checkbox" onClick={() => { changestate(!Darkstate); document.documentElement.classList.toggle('dark'); }} className='invisible h-full w-full'/>
                <span className={`h-5 w-8 md:h-8 md:w-12  rounded-full justify-self-start bg-amber-50 transition duration-75 ease-in-out ${Darkstate ? '-translate-x-0' : '-translate-x-10 md:-translate-x-13'}`}></span>
            </label>
        </div>

    )
   

};

export default Dark_Switch

