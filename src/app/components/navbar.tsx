'use client'
import Dark_Switch from './switch'
import Windowbuttonbar from './windowbutton'


function Navbar(){




return(
    <div className ='h-15 flex flex-col justify-end '>
        <div className = ' rounded-full flex flew-row   gap-5 ml-5 lg:gap-30 md:ml-40 z-3'>

                <Windowbuttonbar></Windowbuttonbar>

                <div className ='flex flex-col rounded-xl'>
                    <Dark_Switch></Dark_Switch>
                </div>
            </div>
    </div>

)
}


export default Navbar
