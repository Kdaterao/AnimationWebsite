



function Tabbar ({handlemousedown}:{handlemousedown:() => void}) {

    return(
            <div>
                <div className = 'flex flex-row-reverse h-7 sm:h-9 md:h-11 lg:h-12 2lg:h-14 xl:h-17 w-full rounded-t-4xl bg-[var(--color-variablepurple)] select-none' onMouseDown ={() => handlemousedown()}>
                    
                    <div className ='h-full basis-1/3 flex flex-row justify-end gap-3'>
                        <div className ='h-full basis-1/3  flex flex-row-reverse gap-3'>
                            <div className='w-5 h-full '></div>
                            <img src = '/x.png' alt = 'x.png'  className='h-1/2'/>
                            <img src = '/square.png' alt = 'square.png'  className=' h-1/2'/>
                            <img src = '/-.png' alt = '-.png'  className=' h-1/2 '/>
                        </div>
                    </div>
                </div>
            </div>
    )
 
}




export default Tabbar