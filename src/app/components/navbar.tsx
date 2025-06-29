import Link from 'next/link'
import Dark_Switch from './switch'
import {Linktype} from '../data'




function Navbar({links} : {links:Linktype[]}){


function Navbarlink({filepath, name}: {filepath: string, name: string}){
    return(
  
        <Link href = {filepath} className = "btn text-white bg-[var(--color-variablepurple)] hover:bg-sky-700  basis-10 p-2 md:p-3 text-center rounded-4xl text-base md:text-xl">
        {name}
        </Link>
    )
}


return(
    <div className ='flex flex-col '>
        <div className ='h-2'></div>
        <div className='flex flex-row'>
            <div className='basis-3/16'></div>
            <div className = 'h-20 md:h-30 max-w-200   md:w-1/3 bg-[var(--color-variableblue)] flex flex-col justify-center rounded-full transition delay-100 duration-100 ease-in-out hover:scale-110'>
                <div className ='flex flex-row justify-center gap:3 lg:gap-10 '>
                    {links.map(({filepath, name, id}) => (<Navbarlink key = {id} filepath = {filepath} name = {name} ></Navbarlink>))}
                </div>
            </div>
            <div className='basis-3/16'></div>
            <div className = 'h-10 md:w-1/6 max-w-24 bg-[var(--color-variableblue)] rounded-full flex flew-row justify-center transition delay-100 duration-100 ease-in-out hover:scale-110'>
                <div className ='flex flex-col justify-center'>
                    <Dark_Switch></Dark_Switch>
                </div>
            </div>
        </div>
    </div>
)
}


export default Navbar
