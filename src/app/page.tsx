
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

    if (window.innerWidth > 1700){
      changeaboutmeposition({x:30, y:200})
      changephotoaboutmeposition({x:950, y:945})
      changevideoposition({x:600, y:90});
      changeformposition({x:110, y:950});
      changefooterposition({x:0, y:1900});
    }
    else if (window.innerWidth < 1700 && window.innerWidth > 1500){
      changeaboutmeposition({x:5, y:200})
      changephotoaboutmeposition({x:950, y:945})
      changevideoposition({x:495, y:90});
      changeformposition({x:110, y:950});
      changefooterposition({x:0, y:1900});
     } else if (window.innerWidth < 1500 && window.innerWidth > 1200){
      changeaboutmeposition({x:320, y:70})
      changephotoaboutmeposition({x:860, y:1400})
      changevideoposition({x:50, y:550});
      changeformposition({x:30, y:1450});
      changefooterposition({x:0, y:1900});
    } else if(window.innerWidth < 1200 && window.innerWidth > 1025){
      changeaboutmeposition({x:100, y:70})
      changephotoaboutmeposition({x:660, y:1380})
      changevideoposition({x:0, y:550});
      changeformposition({x:20, y:1520});
      changefooterposition({x:0, y:1900});
    } else if(window.innerWidth < 1025 && window.innerWidth > 900){
      changeaboutmeposition({x:100, y:70})
      changephotoaboutmeposition({x:520, y:1100})
      changevideoposition({x:0, y:460});
      changeformposition({x:10, y:1230});
      changefooterposition({x:0, y:1600});
    } else if(window.innerWidth < 900 && window.innerWidth > 765){
      changeaboutmeposition({x:100, y:70})
      changephotoaboutmeposition({x:490, y:1100})
      changevideoposition({x:0, y:460});
      changeformposition({x:60, y:1230});
      changefooterposition({x:0, y:1600});
    } else if(window.innerWidth < 765 && window.innerWidth > 600){
      changeaboutmeposition({x:120, y:90})
      changephotoaboutmeposition({x:380, y:770})
      changevideoposition({x:35, y:330});
      changeformposition({x:10, y:900});
      changefooterposition({x:0, y:1300});
    } else if(window.innerWidth < 600 && window.innerWidth > 0){
      changeaboutmeposition({x:30, y:80})
      changephotoaboutmeposition({x:230, y:740})
      changevideoposition({x:0, y:310});
      changeformposition({x:5, y:920});
      changefooterposition({x:0, y:1350});
    }; 
    
    
    window.addEventListener("resize", handleResize);
  };

  useEffect(() =>{
    window.addEventListener("resize", handleResize);
    handleResize();
  },[]);

  //---------------------

  
  function handlemousedown(changeposition:React.Dispatch<React.SetStateAction<coordinates>>){
    function changecoordinates(e: MouseEvent){
        changeposition(currentstate => ({x: currentstate.x + (e.movementX), y:currentstate.y + (e.movementY)}))
    };

    function handlemouseup(){
      document.removeEventListener('mousemove', changecoordinates)
      document.removeEventListener('mouseup', handlemouseup)
    };


    document.addEventListener("mousemove", changecoordinates)
    document.addEventListener("mouseup", handlemouseup)

    console.log('about', aboutmeposition)
    console.log('photo',photoaboutmeposition)
    console.log('video',videoposition)
    console.log('form',formposition)
    console.log('footer',footerposition)
  };

  
  
  

  return (
  <>

    <div className ='fixed w-full z-3'>
                <Navbar/>
    </div>

    <div className ='w-[1920px] h-[1080px] z-0 fixed top-0 justify-self-center'>
        <img src ='animatedbackground_2.gif' alt ='animatedbackground_2.gif'></img>
    </div>


    
    <div className='z-1 w-full h-full overflow-scroll invisible-scrollbar'>
        <div id='aboutme' style ={{ left: aboutmeposition.x, top: aboutmeposition.y, position:'absolute' }}>
          <Aboutme handlemousedown = {() => handlemousedown(changeaboutmeposition)}/>
        </div>
        <div id ='socials' style ={{ left: photoaboutmeposition.x, top: photoaboutmeposition.y, position:'absolute',opacity:0 }}>
          <Photoaboutme handlemousedown = {() => handlemousedown(changephotoaboutmeposition)} />
        </div>
        <div id ='videocomponent' style ={{ left: videoposition.x, top: videoposition.y, position:'absolute',opacity:0 }}>
          <Videoplayer src = '/25_1.mp4' videos = {worklist}   handlemousedown = {() => handlemousedown(changevideoposition)} />
        </div>
        <div id='form' style ={{ left: formposition.x, top: formposition.y, position:'absolute',opacity:0 }}>
          <EmailForm  handlemouseformdown = {() => handlemousedown(changeformposition)}></EmailForm>
        </div>
        <div style ={{ left: footerposition.x, top: footerposition.y, position:'absolute' }}>
          <div className='h-2 w-2'></div>
        </div>
     </div>



     <div className ='w-full h-10 bg-[var(--color-variableblue)] fixed bottom-0 z-3'/>
  </>


  );
}





