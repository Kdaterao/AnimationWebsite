
import Dark_Switch from './switch'


function Navbar(){




return(
    <div className ='flex flex-col '>
        <div className ='h-2'></div>
        <div className='flex flex-row-reverse'>
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
