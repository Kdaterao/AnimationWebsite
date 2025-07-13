'use client'
export default function Row_workcolumn_portal({title, description, thumbnailkey, imagepath, videokey, deletevideo_init, _id}:{title:string, _id:string, description:string,imagepath:string, thumbnailkey:string, videokey:string, deletevideo_init:({_id, thumbnailkey, videokey}:{_id:string, thumbnailkey:string, videokey:string}) => void}){
        return(
        <div  onClick = {() => deletevideo_init({_id:_id, thumbnailkey:thumbnailkey, videokey:videokey})} className ='flex flex-row gap-2 rounded-2xl p-4 bg-[var(--color-variablebluedark)] shadow-2xl transition delay-100 duration-75 ease-in-out hover:-translate-y-2 hover:bg-blue-900'>
                    <div className = 'h-13 md:h-25 relative w-1/3 bg-none'>
                        <div className = 'h-full relative flex flex-col gap-1 bg-none'>
                            <div className = 'bg-[var(--color-variablepurple)]  w-full basis-1/3 rounded-md overflow-hidden text-wrap '>
                                <h3 className = 'text-center text-sm md:text-base p-1 text-[var(--color-titletext)]'>{title}</h3>
                            </div>
                            <div className = 'h-1/2 w-full flex flex-row justify-center'>
                                <img src= {imagepath} alt='/globe.svg'  className='object-scale-down rounded-xl transition delay-100 duration-75 ease-in-out hover:scale-110 '/>
                            </div>
                        </div>

                    </div>
                    

                <div className = 'w-2/3 bg-[var(--color-variablepurple)] rounded-2xl'>
                    <p className = ' text-center text-sm md:text-base text-[var(--color-titletext)]'>{description}</p>
                </div>
        </div> 
        )
    }

