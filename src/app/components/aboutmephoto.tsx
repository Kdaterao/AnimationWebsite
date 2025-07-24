import Tabbar from './tabbar';
import React from 'react'
import {Instagramicon, Tiktokicon} from '../data'



function Photoaboutme({handlemousedown,Windowbuttonfunction}:{handlemousedown:() => void,Windowbuttonfunction:(divname:string) => void}){



  return (
    <div className=" w-95 xxsm:w-100 3lg:w-120 ">

      <Tabbar handlemousedown={handlemousedown} divname='socials'   Windowbuttonfunction = {Windowbuttonfunction}/>

      <div className='bg-[var(--color-variableblue)] shadow-md rounded-b-sm pb-3'>
        <div  className="mb-7">
            <div className=" w-7/8">
                <div className='h-3'/>
                <div className ='flex justify-between'>
                    <div className="w-3/4 flex justify-between bg-[var(--color-variablepurple)] px-4 py-3 rounded-full  ml-3  ">
                        <span className="text-gray-400">My Socials</span>
                        <button className="text-blue-400 hover:underline">Search</button>
                    </div>
                    <img src='/channel.png' alt='/channel.png' className ='h-10 \ w-10 \ rounded-full \ bg-[var(--color-variablepurple)] '/>
                </div>
                
            </div>
            <div className='h-1  bg-[var(--color-variablepurple)] mt-4'/>
        </div>


        <div className='overflow-y-scroll h-50 mr-1 ml-5 md:ml-10 styled-scrollbar '>
            <div className="max-w-3xl mx-auto space-y-8">
                <div>
                <div className ='flex flex-row'>
                    <div className='mr-1 mt-1 h-5 w-5'>
                        <Tiktokicon/>
                    </div>
                    <a
                        href="https://www.tiktok.com/@delectablepaint?lang=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 text-xl hover:underline"
                    >
                        TikTok: @delectablepaint
                    </a>
                </div>
                <p className="text-[var(--color-textdescription)]  text-sm">www.tiktok.com | @delectablepaint</p>
                <p className="text-[var(--color-textdescription)] mt-1">
                    Short form videos featuring creativity, artwork, and trends. Explore unique content and join the community.
                </p>
                </div>

                <div>
                    <div className='flex flex-row'>
                        <div className='mr-2 mt-1 h-5 w-5'>
                            <Instagramicon/>
                        </div>
                        <a
                            href="https://www.instagram.com/coconutwood85/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 text-xl hover:underline"
                        >
                            Instagram: @coconutwood85
                        </a>
                    </div>
                    <p className="text-[var(--color-textdescription)] text-sm">www.instagram.com | @coconutwood85</p>
                    <p className="text-[var(--color-textdescription)] mt-1">
                        Visual storytelling through sketches, animations, and personal moments. Follow for creative inspiration.
                    </p>  
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}


export default Photoaboutme