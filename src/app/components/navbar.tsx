'use client'
import Dark_Switch from './switch'
import Windowbuttonbar from './windowbutton'
import Link from 'next/link'

function Navbar(){




return(
    <div className ='h-15 flex flex-col justify-end '>
        <div className = ' rounded-full flex flew-row  transition delay-100 duration-100 ease-in-out hover:scale-110 gap-5 ml-5 lg:gap-30 md:ml-40'>

                <Windowbuttonbar></Windowbuttonbar>

                <div className ='flex flex-col rounded-xl'>
                    <Dark_Switch></Dark_Switch>
                </div>
                <div>
                    <Link href = '/portal'>Admin</Link>
                </div>
            </div>
    </div>

)
}


export default Navbar
