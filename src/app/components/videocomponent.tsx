import {useRef, useEffect, useState} from 'react'
import Workcolumn from './workcolumn'
import { ObjectId } from "mongodb"

interface video_type {
   _id: string;
   videokey: string;
   title: string;
   description: string;
   thumbnailkey: string;
   objectkey:string;
}

function Videoplayer({src, videos}:{src:string, videos:video_type[]}){

       const r2worker:string = 'http://127.0.0.1:8787'; 

       const [url, setthumburl] = useState<video_type[]>([]);

       const [currentvideo, changevideo] = useState<string>(src);

       async function child_changevideo(newvalue:string) {
        const fetchvideo = await fetch(`${r2worker}/${newvalue}`)
        const blob = await fetchvideo.blob();
        const blobURL = URL.createObjectURL(blob);
        changevideo(blobURL);
       }

       useEffect(() => {

            async function returnvideos({videos}:{videos:video_type[]}){
            const videolist = await Promise.all(
                videos.map(async ({_id, videokey, title, description, thumbnailkey, objectkey}) => {
                    const imagefetch = await fetch(`${r2worker}/${thumbnailkey}`, { method: "GET" });
                    const blob = await imagefetch.blob();
                    const thumbnailUrl = URL.createObjectURL(blob);
                    return {
                        _id,
                        videokey,
                        title,
                        description,
                        objectkey,
                        thumbnailkey: thumbnailUrl

                    };
                })
            );
            setthumburl(videolist);
            }
            returnvideos({ videos });
        },[videos])
        

        const ref = useRef<HTMLVideoElement>(null);
        useEffect(() => {
            if (ref.current) {
                ref.current.play();
            }
        },[currentvideo]);

        return (
            <div className = 'h-100 md:h-150 lg:h-200 w-screen max-w-350 flex flex-col  bg-[var(--color-variableblue)] rounded-4xl self-center hover:-translate-y-2 '>
                <div className = 'flex flex-row h-7 md:h-11 lg:h-17 w-full rounded-t-4xl bg-blue-300' >
                    <h3 className = 'bg-[var(--color-variablepurple)] text-white  duration-1000 text-3xl sm:text-4.5xl md:text-5xl lg:text-7xl basis-2/3 rounded-tl-full rounded-r-full rounded-br-2xl indent-11 md:indent-12-tracking-tighter font-browserwindow'>Featured Works</h3>
                    <div className ='h-full basis-1/3 flex flex-row justify-end gap-3'>
                        <div className ='h-full basis-1/3  flex flew-row justify-end gap-3'>
                            <img src = '-.png' className='hover:bg-black h-2/3'/>
                            <img src = 'square.png' className='hover:bg-black  h-2/3'/>
                            <img src = 'x.png' className='hover:bg-black  h-2/3'/>
                            <div className='w-30 h-full'></div>
                        </div>
                    </div>
                </div>
                <div className ='flex flex-row'>
                    <div className= 'bg-white h-0.25 basis-2/3'></div>
                </div>
                <div className ='bg-[var(--color-variablepurple)] h-7 md:h-11 lg:h-17 rounded-tr-2xl '></div>
                <div className ='h-4'></div>
                <div className = 'h-13/16 w-full flex flew-row justify-start'>
                    <div className='w-10'></div>
                        <div className ='grid grid-cols-6 grid-rows-5 gap-13 sm:gap-13 md:gap-3'>
                            <div className ='col-start-2 row-start-1 col-span-4 row-span-1 md:col-start-1 md:col-span-4 md:row-span-full lg:col-span-4'>
                                <video ref={ref} src={currentvideo} loop playsInline muted className = ' brightness-80 object-scale-down rounded-2xl'/>
                                <h3 className='invisible md:visible md:text-9xl'>Title</h3>
                            </div>
                            <div className ='col-span-4 row-span-3 row-start-5 col-start-2 md:col-span-2 md:row-span-full lg:col-span-2 overflow-y-auto invisible-scrollbar'>
                                    <Workcolumn pastworkarray = {url} child_changevideo = {child_changevideo}/>
                            </div>
                        </div>
                </div>
            </div>
        )
}

export default Videoplayer