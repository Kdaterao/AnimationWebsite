
import {pastworktype} from './data'



function Workcolumn({pastworkarray}:{pastworkarray:pastworktype[]}){

    function Row_WorkColumn({title, description, imagepath}:{title:string, description:string, imagepath:string}){
        return(
        <div className ='flex flex-row gap-2 rounded-2xl p-4 bg-blue-400 shadow-2xl transition delay-100 duration-75 ease-in-out hover:-translate-y-2'>
            <div className = 'h-15 md:h-25 relative w-1/3 bg-blue-400'>
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
            {pastworkarray.map(({title, description, imagepath, key}) => <Row_WorkColumn  key = {key}title ={title} description = {description} imagepath = {imagepath}/>)}
        </div>
    )

}   

export default Workcolumn