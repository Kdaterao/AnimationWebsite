import Tabbar from './tabbar';
import React from 'react'




function Photoaboutme({handlemousedown}:{handlemousedown:() => void}){


        return (
            <div  className = 'h-40 sm:h-45 md:h-55 lg:h-60 w-60 sm:w-65 md:w-70 2md:w-80 2lg:w-100 xl:w-120 flex flex-col  bg-[var(--color-variableblue)] rounded-4xl self-center hover:-translate-y-2 shadow-2xl' >
                <Tabbar handlemousedown = {handlemousedown}></Tabbar>
                <div className = 'flex flex-row gap-7'>
                    <a href="https://www.tiktok.com/@delectablepaint?lang=en" target="_blank" rel="noopener noreferrer">
                        <img src ='/icons8-tiktok.svg' alt ='/icons8-tiktok.svg'  className = 'w-20 h-20 md:w-25 md:h-25 hover:-translate-y-2'></img>
                    </a>
                        <a href="https://www.instagram.com/coconutwood85/" target="_blank" rel="noopener noreferrer">
                            <img src='/instagram-logo.png' alt='/instagram-logo.png'  className= 'w-20 h-20 md:w-25 md:h-25 hover:-translate-y-2'></img>
                        </a>
                </div>
            </div>
        )
}

export default Photoaboutme