import {useState} from 'react';

interface video_type {
   _id: string;
   videokey: string;
   title: string;
   description: string;
   thumbnailkey: string;
   objectkey:string;
}


function Workcolumn({pastworkarray, child_changevideo}:{pastworkarray:video_type[], child_changevideo:Function}){
    const r2worker:string = 'http://127.0.0.1:8787'; 
    

    function Row_WorkColumn({title, description, imagepath, videokey}:{title:string, description:string, imagepath:string, videokey:string}){
        return(
        <div  onClick = {() => child_changevideo(videokey)} className ='flex flex-row gap-2 rounded-2xl p-4 bg-blue-400 shadow-2xl transition delay-100 duration-75 ease-in-out hover:-translate-y-2 hover:bg-blue-900'>
                    <div className = 'h-13 md:h-25 relative w-1/3 bg-none'>
                        <div className = 'h-full relative flex flex-col gap-1'>
                            <div className = 'bg-[var(--color-variablepurple)]  w-full basis-1/3 rounded-md overflow-hidden text-wrap '>
                                <h3 className = 'text-amber-50 text-center text-sm md:text-base p-1'>{title}</h3>
                            </div>
                            <div className = 'h-1/2 w-full flex flex-row justify-center'>
                                <img src = {imagepath} className='object-scale-down rounded-xl transition delay-100 duration-75 ease-in-out hover:scale-110 '/>
                            </div>
                        </div>


                    </div>
                    

                <div className = 'w-2/3 bg-[var(--color-variablepurple)] rounded-2xl'>
                    <p className = 'text-white text-center text-sm md:text-base'>{description}</p>
                </div>
        </div> 
        )
    }
    return( 
        <div className='relative flex flex-col gap-10'>
            {pastworkarray.map(({title, description, thumbnailkey, objectkey, videokey}:{title:string, description:string, thumbnailkey:string,  objectkey:string, videokey:string}) => <Row_WorkColumn key = {objectkey} title = {title} description = {description} imagepath = {thumbnailkey} videokey = {videokey}/>)}
        </div>
    )

}   

export default Workcolumn