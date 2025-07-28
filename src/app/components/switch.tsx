'use client'
import React from 'react';
import { useState } from 'react';



function Dark_Switch(){
    const [Darkstate,changestate] = useState<boolean>(false);
    return(

        <div className ='h-8 w-20 relative  rounded-full outline-[var(--color-navbar-t)] outline-6  flex flex-row' onClick={() => { changestate(!Darkstate); document.documentElement.classList.toggle('dark'); }}>
            <div className= {`h-8 w-8  rounded-full outline-3 outline-[var(--color-outline)]  bg-[var(--color-navbar)] transition duration-75 ease-in-out ${Darkstate ? 'translate-x-0' : 'translate-x-12'}`}></div>
        </div>

    )
   

};

export default Dark_Switch

