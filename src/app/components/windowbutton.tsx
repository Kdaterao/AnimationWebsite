import {componentlist} from '../data'



function Windowbuttonbar({Windowbuttonfunction}:{Windowbuttonfunction: (divname:string) => void}){

    
    function Windowbutton({divname, buttonname, Windowbuttonfunction}:{divname:string,buttonname:React.ReactNode, Windowbuttonfunction: (divname:string) => void}){
        return(
                <button onClick={ () => Windowbuttonfunction(divname)}  className ='rounded-xl p-1 pb-3 bg-[var(--color-navbar-t)]  hover:bg-[var(--color-variablebluedark)] focus:bg-[var(--color-variablebluedark)] font-bold  text-sm md:text-base hover:-translate-y-1 shadow-2xl cursor-pointer h-10 w-20 flex flex-row  outline-2 outline-[var(--color-outline)]'>
                        <div className='w-8 h-8 fill-orange-400 justify-center-safe  ml-5 '>
                            {buttonname}   
                        </div>
                </button>
            )
        };

    return (    
    <div className ='flex flex-row gap-3 xsm:gap-5 lg:gap-9'>
        {componentlist.map(({_id, divname, buttonname}:{_id:string, divname:string, buttonname:React.ReactNode}) => <Windowbutton key={_id} divname={divname} buttonname = {buttonname} Windowbuttonfunction ={Windowbuttonfunction}/>)}
    </div>
    )   
} 

export default Windowbuttonbar


