
'use client'
import Videoplayer from './components/videocomponent'
import EmailForm from './components/form'
import Aboutme from './components/aboutme'
import Photoaboutme from './components/aboutmephoto'
import {useState, useEffect} from 'react'
import {video_type, coordinates} from './data'
import Navbar from'./components/navbar'


export default function Home() {
  //--------------------- fetches the mongodb data
  const [worklist, setworklist] = useState<video_type[]>([]);

  useEffect (() => {
    fetch('/api/login/mongodbrequest')
    .then(res => res.json())
    .then((data) => {setworklist(data as video_type[])});
  }, []);

  //---------------------- handles the intial position of the components based on the window area
  const[videoposition, changevideoposition] = useState<coordinates>({x:600, y:90})
  const[formposition, changeformposition] = useState<coordinates>({x:110, y:950})
  const[aboutmeposition, changeaboutmeposition] = useState<coordinates>({x:30, y:200})
  const[photoaboutmeposition, changephotoaboutmeposition] = useState<coordinates>({x:950, y:945})
  const[footerposition, changefooterposition] = useState<coordinates>({x:0, y:1900})
  

  function handleResize(){
    if ( window.innerWidth > 1760){
      changeaboutmeposition({x:30, y:200})
      changephotoaboutmeposition({x:950, y:945})
      changevideoposition({x:525, y:90});
      changeformposition({x:110, y:950});
      changefooterposition({x:0, y:1900});
    }
    else if ( window.innerWidth < 1760 &&  window.innerWidth > 1620){
      changeaboutmeposition({x:5, y:200})
      changephotoaboutmeposition({x:950, y:945})
      changevideoposition({x:495, y:90});
      changeformposition({x:150, y:950});
      changefooterposition({x:0, y:1900});
     } else if ( window.innerWidth < 1620 &&  window.innerWidth > 1200){
      changeaboutmeposition({x:50, y:70})
      changephotoaboutmeposition({x:800, y:1400})
      changevideoposition({x:100, y:550});
      changeformposition({x:30, y:1450});
      changefooterposition({x:0, y:1900});
    } else if( window.innerWidth < 1200 &&  window.innerWidth > 1025){
      changeaboutmeposition({x:100, y:70})
      changephotoaboutmeposition({x:660, y:1380})
      changevideoposition({x:0, y:550});
      changeformposition({x:20, y:1520});
      changefooterposition({x:0, y:1900});
    } else if( window.innerWidth < 1025 &&  window.innerWidth > 900){
      changeaboutmeposition({x:100, y:70})
      changephotoaboutmeposition({x:580, y:1140})
      changevideoposition({x:0, y:460});
      changeformposition({x:10, y:1230});
      changefooterposition({x:0, y:1600});
    } else if( window.innerWidth < 900 &&  window.innerWidth > 765){
      changeaboutmeposition({x:30, y:80})
      changephotoaboutmeposition({x:150, y:1080})
      changevideoposition({x:0, y:450});
      changeformposition({x:5, y:1500});
      changefooterposition({x:0, y:1600});
    } else if( window.innerWidth < 765 &&  window.innerWidth > 600){
      changeaboutmeposition({x:30, y:80})
      changephotoaboutmeposition({x:150, y:920})
      changevideoposition({x:0, y:310});
      changeformposition({x:5, y:1330});
      changefooterposition({x:0, y:1450});
    }  else if( window.innerWidth < 600 &&  window.innerWidth > 0){
      changeaboutmeposition({x:15, y:80})
      changephotoaboutmeposition({x:7, y:780})
      changevideoposition({x:7, y:310});
      changeformposition({x:7, y:1250});
      changefooterposition({x:5, y:1350});
    }; 
    
  };

  useEffect(() =>{
    window.addEventListener("resize", handleResize);
    handleResize();
  },[]);

  //---------------------

  
  function handlemousedown(changeposition:React.Dispatch<React.SetStateAction<coordinates>>){
    function changecoordinates_mouse(e: MouseEvent){
        changeposition(currentstate => ({x: currentstate.x + (e.movementX), y:currentstate.y + (e.movementY)}))
    };


    function handlemouseup(){
      document.removeEventListener('mousemove', changecoordinates_mouse)
      document.removeEventListener('mouseup', handlemouseup)
    };
    


    document.addEventListener("mousemove", changecoordinates_mouse)
    document.addEventListener("mouseup", handlemouseup)


    console.log('about', aboutmeposition)
    console.log('photo',photoaboutmeposition)
    console.log('video',videoposition)
    console.log('form',formposition)
    console.log('footer',footerposition)
  };
  //---------------------------------------------------

  const [windowsopen, changewindowsopen] = useState<number>(4);
  const [windowidlist, addwindowid] = useState<string[]>(['aboutme','socials','videocomponent','form']); //['aboutme','socials','videocomponent','form']

  


  function Windowbuttonfunction(divname:string, from:string){
        
            const element:HTMLElement = document.getElementById(divname)!;
            if (from == 'x' && element.style.opacity == '100') {

              setTimeout(() => {
                element.style.pointerEvents = 'none';
                element.style.transition = "opacity 0.1s";
                element.style.opacity = '0';
                changewindowsopen(windowsopen - 1)
                console.log('minus')
                }, 200);
                
                const newlist = windowidlist.filter(x => x !== divname);
                addwindowid(newlist);

                //usestate doesnt update until after the function is finished so we gotta clone the list and use that 
                if (newlist.length > 0){
                const randomDiv = newlist[0];
                const randomelement:HTMLElement = document.getElementById(randomDiv)!;
                randomelement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } 


            }else if(element.style.opacity == '100'){
              element.scrollIntoView({ behavior: 'smooth', block: 'center' });

            } else if(element.style.opacity == '0') {
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
                handleResize();
            }
        },[windowsopen])
  
  
  

  return (
  <>

    <div className ='fixed w-2 z-3 top-0 '>
        <Navbar Windowbuttonfunction = {Windowbuttonfunction}/>
    </div>
    
    <div className ='w-full flex justify-center'>
      <div className ='w-[1920px] h-[900px] z-0 fixed  xxsm:bottom-10 noselect  backgrounddark:opacity-50'>
          <img src ='websitebackbackground_2_v4.apng' alt ='animatedbackground_2.gif'></img>
      </div>
    </div>


    
    <div className='z-1 w-full h-full'>
        <div id='aboutme' style ={{ left: aboutmeposition.x, top: aboutmeposition.y, position:'absolute',opacity:100, pointerEvents:'all' }}>
          <Aboutme handlemousedown = {() => handlemousedown(changeaboutmeposition)} Windowbuttonfunction = {Windowbuttonfunction}/>
        </div>
        <div id ='socials' style ={{ left: photoaboutmeposition.x, top: photoaboutmeposition.y, position:'absolute',opacity:100, pointerEvents:'all' }}>
          <Photoaboutme handlemousedown = {() => handlemousedown(changephotoaboutmeposition)} Windowbuttonfunction = {Windowbuttonfunction} />
        </div>
        <div id ='videocomponent' style ={{ left: videoposition.x, top: videoposition.y, position:'absolute',opacity:100, pointerEvents:'all' }}>
          <Videoplayer loadingvideo = '/loading_1.mp4'initialvideo = '25_1.mp4' videos = {worklist}   handlemousedown = {() => handlemousedown(changevideoposition)} Windowbuttonfunction = {Windowbuttonfunction} />
        </div>
        <div id='form' style ={{ left: formposition.x, top: formposition.y, position:'absolute',opacity:100, pointerEvents:'all' }}>
          <EmailForm  handlemouseformdown = {() => handlemousedown(changeformposition)} Windowbuttonfunction = {Windowbuttonfunction}></EmailForm>
        </div>
        <div style ={{ left: footerposition.x, top: footerposition.y, position:'absolute' }}>
          <div className='h-2 w-2'></div>
        </div>
     </div>

      <div className=' fixed z-3 bottom-0 h-10 min-w-screen bg-[var(--color-navbar)]  outline-2  invisible xxsm:visible'/>
  </>


  );
}





