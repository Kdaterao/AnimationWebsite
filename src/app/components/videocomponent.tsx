import {useRef, useEffect, useState} from 'react'
import Tabbar from './tabbar'

import Workcolumn from './workcolumn';
import {video_type} from '../data'


function Videoplayer({initialvideo, videos, handlemousedown, Windowbuttonfunction, loadingvideo}:{initialvideo:string, videos:video_type[], handlemousedown:() => void,Windowbuttonfunction:(divname:string, from:string) => void, loadingvideo:string}){

       //variables and useState variables used in the whole component
       const r2worker:string = 'https://r2-worker.akdaterao.workers.dev'
       const [url, setthumburl] = useState<video_type[]>([]);
       const [currentvideo, changevideo] = useState<string>(loadingvideo);
       const [currenttitle, changetitle] = useState<string>('Animation made with linework')
       const [currentdescription, changedescription] = useState<string>('This is a video ig')

       //loads in the first video so that we dont have to package it with the website
       useEffect(() =>{
        async function load_firstvideo(){
            const placeholdervideo = await fetch(`${r2worker}/${initialvideo}`)
            const blob = await placeholdervideo.blob();
            const blobURL = URL.createObjectURL(blob);
            changevideo(blobURL);
        };
        load_firstvideo();
       },[])

       //function which handles changing videos(this is drilled into the workcolumn since it using useState variables)
       async function child_changevideo(newvalue:string, newtitle:string, description:string) {
        changevideo(loadingvideo) //placeholder video
        const fetchvideo = await fetch(`${r2worker}/${newvalue}`)
        const blob = await fetchvideo.blob();
        const blobURL = URL.createObjectURL(blob);
        changevideo(blobURL);
        changetitle(newtitle);
        changedescription(description);
       }


       //takes in the list of videokeys,thumbnailkeys,titles,descriptions, ect.. from the mongodb fetch
       useEffect(() => {
            async function returnvideos(videos:video_type[]){
                if (!Array.isArray(videos)) {
                    console.warn("Your mongodb fetch is not working(this error is reported from the returnvideos function)", videos);
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
       


        //required for playing videos
        const ref = useRef<HTMLVideoElement>(null);
        useEffect(() => {
            if (ref.current) {
                ref.current.play();
            }
        },[currentvideo]);






        //------------------------------------------------------------------------------------------------------------------------------------------------------

        return (
            <div  onMouseDown ={() => handlemousedown}  className = 'flex flex-col \ h-110  sm:h-140 md:h-150 2md:h-160 lg:h-175 2lg:h-185 3lg:h-190 4lg:h-205 \ w-94 xxsm:w-125 xsm:w-140 sm:w-160 md:w-screen  md:max-w-250 lg:max-w-275 3lg:max-w-290 4lg:max-w-325 \ bg-[var(--color-variableblue)] \ rounded-sm \ self-center hover:-translate-y-2 \ shadow-2xl \ select-none \ outline-2'>

                {/*imported tabbar component*/}
                <Tabbar handlemousedown = {handlemousedown} divname = 'videocomponent' Windowbuttonfunction = {Windowbuttonfunction} ></Tabbar>


                <div className = 'flex flew-row \ h-13/16 w-full \ justify-start \ mt-6 \ overflow-y-scroll overflow-x-hidden styled-scrollbar '>
                        {/*left side padding*/}
                        <div className ='w-0 md:w-10'></div>

                        {/*defines grid and columns*/}
                        <div className ='grid \ grid-cols-10 \ grid-rows-6 \ gap-15 md:gap-3'>

                            {/*Video and description div*/}
                            <div className ='col-start-1 col-span-7 xxsm:col-start-1 xxsm:col-span-9 xsm:col-span-full \ row-start-1 row-span-10 \ md:col-start-0 md:col-span-7 \ ml-5 mr-5 md:ml-0 md:mr-0'>
                                <div className ='w-5'/>
                                <video ref={ref} src={currentvideo}  muted  controls loop playsInline className = 'shadow-2xl dark:shadow-gray-700 shadow-white object-scale-down rounded-sm '/>
                                
                                <div className ='flex flew-row \ w-full \ h-13'>
                                    <h3 className='text-4xl overflow-clip mt-3'>{currenttitle}</h3>
                                </div>


                                <div className ='flex flex-row \ gap-5 \ mt-1'>
                                    <img src='/channel.png' alt='/channel.png' className ='h-10 \ w-10 \ rounded-full \ bg-[var(--color-variablepurple)]'/>
                                    <h3 className='mt-1 \ text-xl'>DelectablePaint</h3>
                                </div>

                                <div className ='w-full \ h-23 md:h-20 lg:h-28 xl:h-30 \ mt-1 \ rounded-2xl \ bg-[var(--color-variablepurple)] \ shadow-md'>
                                    <p className ='text-center text-[var(--color-textdescription)]'>{currentdescription}</p>
                                </div>
                                
                                <div className='h-10'></div>
                            </div>
                            

                            {/*video list div(the first div is the line above the video column)*/}
                            <div className ='mt-40 xxsm:mt-55 xxsm:ml-1 xsm:mt-65 sm:mt-75 md:mt-0 md:ml-0 \ h-0.5 \ bg-[var(--color-variablepurple)] \ col-start-1 col-span-full md:col-start-8 md:col-span-3 \ row-start-5 md:row-span-full'></div>
                            <div className ='mt-45 xxsm:mt-60 xxsm:ml-12 xsm:mt-70 sm:mt-80 sm:ml-15 md:mt-0 md:ml-0 \ col-start-1 col-span-9 md:col-start-8 md:col-span-3 \ row-start-5 row-span-1  md:row-span-full'>
                                <Workcolumn pastworkarray = {url} child_changevideo = {child_changevideo}/>
                            </div>

                            
                        </div>
                </div>
            </div>
        )
}

export default Videoplayer
