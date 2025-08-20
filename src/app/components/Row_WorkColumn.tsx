


export default function Row_WorkColumn({title, description, imagepath, videokey, child_changevideo}:{title:string, description:string, imagepath:string, videokey:string, child_changevideo:(videokey:string,title:string, description:string) => void}){
        return(
        <div  onClick = {() => child_changevideo(videokey, title, description)} className ='flex flex-row gap-2 rounded-xl  bg-[var(--color-variablepurple)] hover:bg-[var(--color-variableblue)] shadow-xl md:shadow-2xl transition delay-100 duration-75 ease-in-out hover:-translate-y-2  h-25  w-99/100 cursor-pointer'>
                <div className= 'w-34 lg:w-45 flex flex-row justify-center bg-[var(--color-variableblue)] rounded-xl'>
                    <img src= {imagepath} alt='/globe.svg'  className='object-scale-down rounded-xl  h-full justify-center'/>
                </div>
                <div className = 'w-1/2 bg-none rounded-2xl flex flex-col'>
                    <div className = ' rounded-md overflow-hidden text-wrap '>
                        <h3 className = 'text-xl p-1 text-[var(--color-textdescription)]'>{title}</h3>
                    </div>
                </div>
        </div> 
        )
    }

