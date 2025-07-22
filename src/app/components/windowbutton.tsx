import {componentlist} from '../data'
import {useState, useEffect} from 'react'




function Windowbuttonbar(){
    const [windowsopen, changewindowsopen] = useState<number>(0);
    const [windowidlist, addwindowid] = useState<string[]>([]);
    function Windowbutton({divname, buttonname}:{divname:string,buttonname:string}){


        function Windowbuttonfunction(divname:string){
        
            const element:HTMLElement = document.getElementById(divname)!;
            if (element.style.opacity === "100") {
                element.style.pointerEvents = 'none';
                element.style.transition = "opacity 0.1s";
                element.style.opacity = '0';
                changewindowsopen(windowsopen - 1)
                console.log('minus')
                
                
                const newlist = windowidlist.filter(x => x !== divname);
                addwindowid(newlist);

                //usestate doesnt update until after the function is finished so we gotta clone the list and use that 
                if (newlist.length > 0){
                const randomDiv = newlist[0];
                const randomelement:HTMLElement = document.getElementById(randomDiv)!;
                randomelement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }


            } else {
                element.style.pointerEvents = 'all';
                element.style.transition = "opacity 0.4s ease";
                element.style.opacity = '100';
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                changewindowsopen(windowsopen + 1)


                const  currentlist = windowidlist
                const newlist = currentlist.concat(divname)
                addwindowid(newlist)
            };
        };
        
        useEffect(() =>{
            if (windowsopen === 0 && document.documentElement.classList.toggle('backgrounddark')){
                document.documentElement.classList.toggle('backgrounddark')
            } else if(windowsopen > 0 && !document.documentElement.classList.toggle('backgrounddark')){
                document.documentElement.classList.toggle('backgrounddark')
            }
        },[windowsopen])

        return(
                <button onClick={ () => Windowbuttonfunction(divname)}  className ='rounded-xl w-20 md:w-35 md:p-3  bg-[var(--color-variableblue)] hover:bg-[var(--color-variablebluedark)] font-bold  text-sm md:text-base hover:-translate-y-2 shadow-2xl cursor-pointer'>{buttonname}</button>
            )
        };





    
    return (    
    <div className ='flex flex-row gap-5 lg:gap-10'>
        {componentlist.map(({_id, divname, buttonname}:{_id:string, divname:string, buttonname:string}) => <Windowbutton key={_id} divname={divname} buttonname = {buttonname}/>)}
    </div>
    )   
} 

export default Windowbuttonbar


