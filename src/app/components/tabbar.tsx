



function Tabbar ({handlemousedown, message}:{handlemousedown:Function, message:string}) {

    return(
            <div>
                <div className = 'flex flex-row h-7 sm:h-9 md:h-11 lg:h-12 2lg:h-14 xl:h-17 w-full rounded-t-4xl bg-[var(--color-variablebluedark)]' onMouseDown ={() => handlemousedown()}>
                    <h3 className = 'bg-[var(--color-variablepurple)]  duration-1000 text-3xl sm:text-4.5xl md:text-5xl  2lg:text-6xl xl:text-7xl basis-2/3 rounded-tl-full rounded-r-full rounded-br-2xl indent-5 sm:indent-7 md:indent-7 lg:indent-11 xl:indent-12  tracking-tighter font-browserwindow overflow-hidden text-[var(--color-titletext)]'>{message}</h3>
                    <div className ='h-full basis-1/3 flex flex-row justify-end gap-3'>
                        <div className ='h-full basis-1/3  flex flex-row-reverse gap-3'>
                            <div className='w-5 h-full'></div>
                            <img src = 'x.png' className='  h-1/2 '/>
                            <img src = 'square.png' className=' h-1/2'/>
                            <img src = '-.png' className=' h-2/3'/>
                        </div>
                    </div>
                </div>
                <div className ='flex flex-row'>
                    <div className= 'bg-white h-0.25 basis-2/3'></div>
                </div>
                <div className ='bg-[var(--color-variablepurple)] h-7 md:h-11 lg:h-17 rounded-tr-2xl ' onMouseDown ={() => handlemousedown()}/>
            </div>
    )
 
}

export default Tabbar