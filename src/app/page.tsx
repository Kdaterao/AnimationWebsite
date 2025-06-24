
'use client'
import Videoplayer from './components/videocomponent'
import EmailForm from './components/form'
import {useState, useEffect} from 'react'

interface video_type {
   _id: string;
   videokey: string;
   title: string;
   description: string;
   thumbnailkey: string;
   objectkey:string;
}




export default function Home() {
  const [worklist, setworklist] = useState<video_type[]>([]);

  useEffect (() => {
    fetch('/api/login/mongodbrequest')
    .then(res => res.json())
    .then((data) => {setworklist(data as video_type[])});
  }, []);

  return (
    <>
      <div className ='h-50 w-full'></div>
      <div className = 'h-screen w-screen flex flex-col gap-10'>
        <Videoplayer src = '/25_1.mp4' videos = {worklist} />
        <p className='text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl'>Contact Me</p>
        <EmailForm></EmailForm>
      </div>
    </>

  );
}





