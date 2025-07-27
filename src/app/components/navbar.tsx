'use client'
import Dark_Switch from './switch'
import Windowbuttonbar from './windowbutton'


function Navbar({Windowbuttonfunction}:{Windowbuttonfunction: (divname:string) => void}){




return(
    <div className='flex flex-row \ backgrounddark:opacity-80'>
        <div className ='h-3 flex flex-col justify-center-safe '>

            <div className = ' flex flew-row \ gap-5 \ z-3'>
                    <div className ='w-0 xsm:w-10 md:w-20 lg:w-40 \ outline-0 xsm:outline-2 outline-[var(--color-outline) \ mt-4 backgrounddark:mt-1 \ rounded-sm \ invisible backgrounddark:visible'>
                        <div className='h-10 \ w-full \ bg-[var(--color-navbar)]'></div>
                    </div>
                    <div className ='flex flex-row \ gap-8 md:gap-12'>
                        <div className=' mt-4 backgrounddark:mt-1'>
                        <Windowbuttonbar Windowbuttonfunction ={Windowbuttonfunction} />
                        </div>
                        <div className ='flex flex-col \ mt-5 backgrounddark:mt-2 '>
                            <Dark_Switch></Dark_Switch>
                        </div>
                    </div>
                    <div className ='w-0 xsm:min-w-screen \ outline-0 xxsm:outline-2 outline-[var(--color-outline) \  mt-4 backgrounddark:mt-1 \ rounded-sm \ invisible backgrounddark:visible'>
                        <div className='h-10 \ w-full \ bg-[var(--color-navbar)]'></div>
                    </div>
            </div>
            <div className ='right-5 \ bottom-15 \ fixed \ visible backgrounddark:invisible '>
                <img src='/channel.png' alt='/channel.png' className ='h-20 \ w-20 \ rounded-full \ bg-[var(--color-variablepurple)] \ outline-4 outline-[var(--color-variablepurple)]'/>
            </div>
        </div>
    </div>

)
}


export default Navbar
