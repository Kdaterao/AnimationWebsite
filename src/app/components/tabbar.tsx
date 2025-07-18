



function Tabbar ({handlemousedown,divname}:{handlemousedown:() => void,divname:string}) {

        function Windowbuttonfunction(divname:string){
        
            const element:HTMLElement = document.getElementById(divname)!;
            if (element.style.opacity === "100") {
                element.style.pointerEvents = 'none';
                element.style.transition = "opacity 0.1s";
                element.style.opacity = '0';
                
            } else {
                element.style.pointerEvents = 'all';
                element.style.transition = "opacity 0.4s ease";
                element.style.opacity = '100';
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            };
        };

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
                            className='h-3/4 hover:bg-[var(--color-variableblue)] hover:rounded text-[var(--color-textdescription)] hover:text-red-500 ' onClick={() => Windowbuttonfunction(divname) }>
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
            )
        }


    return(
            <div>
                <div className = 'flex flex-row-reverse h-7 sm:h-9 md:h-11 lg:h-12 2lg:h-14 xl:h-17 w-full rounded-t-xl bg-[var(--color-variablepurple)] select-none' onMouseDown ={() => handlemousedown()}>
                    
                    <div className ='h-full basis-1/3 flex flex-row justify-end gap-3'>
                        <div className ='h-full basis-1/3  flex flex-row-reverse mr-0.5'>
                            <Xcomponent></Xcomponent>
                        </div>
                    </div>
                </div>
            </div>
    )
 
}




export default Tabbar