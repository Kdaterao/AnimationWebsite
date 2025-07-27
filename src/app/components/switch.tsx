'use client'
import React from 'react';
import { useState } from 'react';


function Dark_Switch(){
    const [Darkstate,changestate] = useState<boolean>(false);
    return(

        <div className ='h-8 w-20 relative  rounded-full outline-[var(--color-navbar-t)] outline-6 '>
            <label className ={`h-full w-full relative  rounded-full flex  bg-none outline-[var(--color-navbar-t)]   ${Darkstate ? '' : ''}`}>
                <input type="checkbox" onClick={() => { changestate(!Darkstate); document.documentElement.classList.toggle('dark'); }} className='invisible h-full w-full'/>
                <span className={`h-8 w-8  rounded-full outline-3 outline-[var(--color-outline)]  bg-[var(--color-navbar)] transition duration-75 ease-in-out flex flex-shrink-0 ${Darkstate ? '-translate-x-1' : '-translate-x-12'}`}></span>
            </label>
        </div>

    )
   

};

export default Dark_Switch

