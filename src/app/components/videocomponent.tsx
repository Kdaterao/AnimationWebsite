import {useRef, useEffect, useState} from 'react'
import Tabbar from './tabbar'

import Workcolumn from './workcolumn';
import {video_type} from '../data'


function Videoplayer({src, videos, handlemousedown}:{src:string, videos:video_type[], handlemousedown:() => void}){

       const r2worker:string = 'https://r2-worker.akdaterao.workers.dev'
       const [url, setthumburl] = useState<video_type[]>([]);
       const [currentvideo, changevideo] = useState<string>(src);
       const [currenttitle, changetitle] = useState<string>('Animation made with linework')
       const [currentdescription, changedescription] = useState<string>('This is a video ig')

       async function child_changevideo(newvalue:string, newtitle:string, description:string) {
        changevideo('/loading.mp4') //this is the placeholder video that is used until the actual video is loaded in
        const fetchvideo = await fetch(`${r2worker}/${newvalue}`)
        const blob = await fetchvideo.blob();
        const blobURL = URL.createObjectURL(blob);
        changevideo(blobURL);
        changetitle(newtitle);
        changedescription(description);
       }

       useEffect(() => {
            async function returnvideos(videos:video_type[]){
                if (!Array.isArray(videos)) {
                    console.warn("videos is not an array:", videos);
                return;
                }
            const videolist = await Promise.all(
                videos.map(async ({_id, videokey, title, description, thumbnailkey}) => {
                    const imagefetch = await fetch(`${r2worker}/${thumbnailkey}`, { method: "GET" });
                    const blob = await imagefetch.blob();
                    const thumbnailUrl = URL.createObjectURL(blob);
                    return {
                        _id,
                        videokey,
                        title,
                        description,
                        thumbnailkey: thumbnailUrl

                    };
                })
            );
            setthumburl(videolist);
            }
            returnvideos( videos );

        },[videos])
        
        const ref = useRef<HTMLVideoElement>(null);
        useEffect(() => {
            if (ref.current) {
                ref.current.play();
            }
        },[currentvideo]);

        return (
            <div  onMouseDown ={() => handlemousedown}  className = 'h-105 md:h-150 2md:h-160 lg:h-175 2lg:h-185 3lg:h-190 4lg:h-205 w-screen min-w-135 max-w-140   md:max-w-250 lg:max-w-275 3lg:max-w-290 4lg:max-w-325 pb-3flex flex-col  bg-[var(--color-variableblue)] rounded-4xl self-center hover:-translate-y-2 shadow-2xl select-none'  >
                <div>
                    <Tabbar handlemousedown = {handlemousedown} divname = 'videocomponent' ></Tabbar>
                </div>
                <div className ='h-4'></div>
                <div className = 'h-13/16 w-full flex flew-row justify-start'>
                    <div className='w-10'></div>
                        <div className ='grid grid-cols-10 grid-rows-6 gap-15  md:gap-3'>
                            <div className ='col-start-2 row-start-1 col-span-8 row-span-1 md:col-start-0 md:col-span-7'>
                                <video ref={ref} src={currentvideo} muted  controls loop playsInline className = 'brightness-80 object-scale-down rounded-xl'/>
                                <div className ='flex flew-row w-full h-13   invisible md:visible'>
                                    <h3 className='md:text-4xl overflow-clip mt-3'>{currenttitle}</h3>
                                </div>
                                <div className ='h-1'></div>
                                <div className ='flex flex-row gap-5 invisible md:visible'>
                                    <img src='/channel.png' alt='/channel.png' className ='h-10 w-10 rounded-full bg-[var(--color-variablepurple)]'/>
                                    <h3 className='mt-1 text-xl'>DelectablePaint</h3>
                                </div>
                                <div className ='h-1'></div>
                                <div className ='invisible md:visible w-full md:h-20 lg:h-28 xl:h-30 bg-[var(--color-variablepurple)] rounded-2xl shadow-md'>
                                    <p className ='text-center text-[var(--color-textdescription)]'>{currentdescription}</p>
                                </div>
                            </div>
                            <div className ='h-0.5 bg-[var(--color-variablepurple)] col-span-8 row-span-3 row-start-5 col-start-2 md:col-start-8 md:col-span-3 md:row-span-full'></div>
                            <div className ='col-span-8 row-span-3 row-start-5 col-start-2 md:col-start-8 md:col-span-3 md:row-span-full overflow-y-scroll styled-scrollbar'>
                                <Workcolumn pastworkarray = {url} child_changevideo = {child_changevideo}/>
                            </div>
                        </div>
                    <div className='w-10'></div>
                </div>
            </div>
        )
}

export default Videoplayer
