'use client'
import Dark_Switch from './switch'
import Windowbuttonbar from './windowbutton'


function Navbar({Windowbuttonfunction}:{Windowbuttonfunction: (divname:string) => void}){




return(
    <div className='flex flex-row backgrounddark:opacity-80'>
        <div className ='h-3 flex flex-col justify-center-safe '>

            <div className = ' flex flew-row gap-5 z-3'>
                    <div className ='w-0 xsm:w-10 md:w-20 lg:w-40 invisible backgrounddark:visible mt-4 backgrounddark:mt-1'>
                        <div className='h-10 w-full  bg-[var(--color-navbar)]'></div>
                    </div>
                    <div className ='flex flex-row gap-8 md:gap-12  opacity-90'>
                        <div className=' mt-4 backgrounddark:mt-1'>
                        <Windowbuttonbar Windowbuttonfunction ={Windowbuttonfunction} />
                        </div>
                        <div className ='flex flex-col mt-5 backgrounddark:mt-2 '>
                            <Dark_Switch></Dark_Switch>
                        </div>
                    </div>
                    <div className ='w-0 xsm:min-w-screen invisible backgrounddark:visible mt-4 backgrounddark:mt-1'>
                        <div className='h-10 w-full  bg-[var(--color-navbar)]'></div>
                    </div>
            </div>
        </div>
    </div>

)
}


export default Navbar
