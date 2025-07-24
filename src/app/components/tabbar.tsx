



function Tabbar ({handlemousedown,divname, Windowbuttonfunction}:{handlemousedown:() => void,divname:string,Windowbuttonfunction:(divname:string) => void}) {


        
        function Xcomponent(){
            return(
                    <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className='h-3/4 hover:bg-[var(--color-variableblue)] hover:rounded text-[var(--color-textdescription)] hover:text-orange-400 focus:text-orange-400  ' onClick={() => Windowbuttonfunction(divname) }>
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
            )
        }


    return(
            <div>
                <div className = 'flex flex-row-reverse h-14 md:h-15 xl:h-17 w-full rounded-t-sm bg-[var(--color-variablepurple)] select-none ' onMouseDown ={() => handlemousedown()}>
                    
                    <div className ='h-full basis-1/3 flex flex-row justify-end gap-3'>
                        <div className ='h-full basis-1/3  flex flex-row-reverse mr-0.5 cursor-pointer'>
                            <Xcomponent></Xcomponent>
                        </div>
                    </div>
                </div>
            </div>
    )
 
}




export default Tabbar