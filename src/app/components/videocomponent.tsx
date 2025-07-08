import {useRef, useEffect, useState} from 'react'
import Tabbar from './tabbar'

import Workcolumn from './workcolumn';

interface video_type {
   _id: string;
   videokey: string;
   title: string;
   description: string;
   thumbnailkey: string;
   objectkey:string;
}

function Videoplayer({src, videos, handlemousedown}:{src:string, videos:video_type[], handlemousedown:Function}){

       const r2worker:string = 'https://r2-worker.akdaterao.workers.dev'
       const [url, setthumburl] = useState<video_type[]>([]);
       const [currentvideo, changevideo] = useState<string>(src);
       const [currenttitle, changetitle] = useState<string>('Animation made with linework tool')

       async function child_changevideo(newvalue:string, newtitle:string) {
        changevideo('/loading.mp4') //this is the placeholder video that is used until the actual video is loaded in
        const fetchvideo = await fetch(`${r2worker}/${newvalue}`)
        const blob = await fetchvideo.blob();
        const blobURL = URL.createObjectURL(blob);
        changevideo(blobURL);
        changetitle(newtitle);
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
            <div onMouseDown ={() => handlemousedown}  className = 'h-98 md:h-150 lg:h-200 w-screen max-w-150  md:max-w-250 lg:max-w-275 3lg:max-w-290 4lg:max-w-325 flex flex-col  bg-[var(--color-variableblue)] rounded-4xl self-center hover:-translate-y-2 shadow-2xl'  >
                <div>
                    <Tabbar handlemousedown = {handlemousedown} message = ''></Tabbar>
                </div>
                <div className ='h-4'></div>
                <div className = 'h-13/16 w-full flex flew-row justify-start'>
                    <div className='w-10'></div>
                        <div className ='grid grid-cols-6 grid-rows-5 gap-13 sm:gap-13 md:gap-3'>
                            <div className ='col-start-2 row-start-1 col-span-4 row-span-1 md:col-start-1 md:col-span-4 md:row-span-full lg:col-span-4'>
                                <video ref={ref} src={currentvideo} muted  controls loop playsInline className = 'brightness-80 object-scale-down rounded-2xl'/>
                                <h3 className='invisible md:visible md:text-7xl text-[var(--color-titletext)]'>{currenttitle}</h3>
                            </div>
                            <div className ='col-span-4 row-span-3 row-start-5 col-start-2 md:col-span-2 md:row-span-full lg:col-span-2 overflow-y-auto invisible-scrollbar '>
                                        <Workcolumn pastworkarray = {url} child_changevideo = {child_changevideo}/>
                            </div>
                        </div>
                </div>
            </div>
        )
}

export default Videoplayer
