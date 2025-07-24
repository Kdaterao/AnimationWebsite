'use client'
import React from 'react';
import { useState } from 'react';


function Dark_Switch(){
    const [Darkstate,changestate] = useState<boolean>(false);
    return(

        <div className ='h-8 w-20 relative '>
            <label className ={`h-full w-full relative  rounded-full flex flex-none bg-none outline-[var(--color-variableblue)] outline-4 ${Darkstate ? '' : ''}`}>
                <input type="checkbox" onClick={() => { changestate(!Darkstate); document.documentElement.classList.toggle('dark'); }} className='invisible h-full w-full'/>
                <span className={`h-8 w-12  rounded-full justify-self-start bg-[var(--color-variableblue)] transition duration-75 ease-in-out ${Darkstate ? '-translate-x-0' : '-translate-x-13'}`}></span>
            </label>
        </div>

    )
   

};

export default Dark_Switch

