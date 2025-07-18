import {componentlist} from '../data'

function Windowbuttonbar(){

    function Windowbutton({divname, buttonname}:{divname:string,buttonname:string}){
        
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

        return(
                <button onClick={ () => Windowbuttonfunction(divname)}  className ='rounded-xl w-20 md:w-35 md:p-3  bg-[var(--color-variableblue)] hover:bg-[var(--color-variablebluedark)] font-bold  text-sm md:text-base hover:-translate-y-2 shadow-2xl'>{buttonname}</button>
            )
        };





    
    return (    
    <div className ='flex flex-row gap-5 lg:gap-10'>
        {componentlist.map(({_id, divname, buttonname}:{_id:string, divname:string, buttonname:string}) => <Windowbutton key={_id} divname={divname} buttonname = {buttonname}/>)}
    </div>
    )   
} 

export default Windowbuttonbar


