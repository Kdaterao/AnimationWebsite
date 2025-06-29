
'use client'
import Videoplayer from './components/videocomponent'
import EmailForm from './components/form'
import {useState, useEffect} from 'react'

interface video_type {
   _id: string;
   videokey: string;
   title: string;
   description: string;
   thumbnailkey: string;
   objectkey:string;
}

interface coordinates {

  x:number
  y:number
}


export default function Home() {
  //--------------------- fetches the mongodb data
  const [worklist, setworklist] = useState<video_type[]>([]);

  useEffect (() => {
    fetch('/api/login/mongodbrequest')
    .then(res => res.json())
    .then((data) => {setworklist(data as video_type[])});
  }, []);
  //---------------------- handles the intial position of the components based on the window area
  const[videoposition, changevideoposition] = useState<coordinates>({x:350, y:200}) 
  const[formposition, changeformposition] = useState<coordinates>({x:2000, y:200})
  const[mousestate, changemousestate] = useState<boolean>(true);


  function handleResize(){
    changevideoposition({x:200, y:200});
    changeformposition({x:200, y:1200});

     if (window.innerWidth < 1100 && window.innerWidth > 950){
      changevideoposition({x:100, y:200});
      changeformposition({x:100, y:1200});
     } else if (window.innerWidth < 1100 && window.innerWidth > 950){
      changevideoposition({x:100, y:200});
      changeformposition({x:100, y:1200});
    } else if(window.innerWidth < 900 && window.innerWidth > 800){
      changevideoposition({x:100, y:150});
      changeformposition({x:100, y:1000});
    } else if (window.innerWidth < 800 && window.innerWidth > 750) {
      changevideoposition({x:0, y:100});
      changeformposition({x:0, y:800});
    } else if (window.innerWidth < 750) {
      changevideoposition({x:0, y:100});
      changeformposition({x:0, y:600});
    };
    window.addEventListener("resize", handleResize)
  };

  useEffect(() =>{
    window.addEventListener("resize", handleResize);
    handleResize();
  },[]);
  //---------------------

  

  function handleMouseDown_video(){

    function changecoordinates(e: MouseEvent){
        changevideoposition(currentstate => ({x: currentstate.x + (e.movementX), y:currentstate.y + (e.movementY)}))
    }
    function handlemouseup(){
      document.removeEventListener('mousemove', changecoordinates)
      document.removeEventListener('mouseup', handlemouseup)
      
    }
      document.addEventListener("mousemove", changecoordinates)
      document.addEventListener("mouseup", handlemouseup);
  };

  function handleMouseDown_form(){
    function changecoordinates(e: MouseEvent){
        changeformposition(currentstate => ({x: currentstate.x + (e.movementX), y:currentstate.y + (e.movementY)}))
    }
    function handlemouseup(){
      document.removeEventListener('mousemove', changecoordinates)
      document.removeEventListener('mouseup', handlemouseup)
      
    }
      document.addEventListener("mousemove", changecoordinates)
      document.addEventListener("mouseup", handlemouseup);
  };
  

  
  return (
    <>
        <div style ={{ left: videoposition.x, top: videoposition.y, position:'absolute' }}>
          <Videoplayer src = '/25_1.mp4' videos = {worklist}   handleMouseDown_video = { handleMouseDown_video} />
        </div>
        <div style ={{ left: formposition.x, top: formposition.y, position:'absolute' }}>
          <EmailForm  handlemousedown_form = {handleMouseDown_form}></EmailForm>
        </div>
    </>

  );
}





