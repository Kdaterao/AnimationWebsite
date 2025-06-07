
'use client'
import Videoplayer from './videocomponent'
import Workcolumn from './workcolumn'
import {pastworkarray} from './data'


export default function Home() {

  
  return (
    <>
      <div className ='h-50 w-full'></div>
      <div className = 'h-screen w-screen flex flex-col gap-10'>
        <Videoplayer src = '/25_1.mp4' height = '500px' width = '500px'/>
        <p className='text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl'> Featured Works</p>

      </div>
    </>

  );
}
