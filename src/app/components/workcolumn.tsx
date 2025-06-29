import {useState, useEffect} from 'react';
import  Row_WorkColumn from './Row_WorkColumn';

interface video_type {
   _id: string;
   videokey: string;
   title: string;
   description: string;
   thumbnailkey: string;
   objectkey:string;
}


function Workcolumn({pastworkarray, child_changevideo}:{pastworkarray:video_type[], child_changevideo:Function}){

    const [arrayreturned, changearray] = useState<boolean>(false);

    useEffect(() => {
        if (pastworkarray.length > 0) {
        changearray(true);
        }
    }, [pastworkarray]);


    const placeholderarray:video_type[] = [{_id:'a', videokey:'0', title:'loading', description:'loading', thumbnailkey:'globe.svg', objectkey:'a'},{_id:'b', videokey:'0', title:'loading', description:'loading', thumbnailkey:'globe.svg', objectkey:'b'},{_id:'c', videokey:'0', title:'loading', description:'loading', thumbnailkey:'globe.svg', objectkey:'c'},{_id:'d', videokey:'0', title:'loading', description:'loading', thumbnailkey:'globe.svg', objectkey:'d'}];

    if(arrayreturned){
        return( 
        <div className='relative flex flex-col gap-10'>
                {pastworkarray.map(({title, description, thumbnailkey, objectkey, videokey}:{title:string, description:string, thumbnailkey:string,  objectkey:string, videokey:string}) => <Row_WorkColumn key = {objectkey} title = {title} description = {description} imagepath = {thumbnailkey} videokey = {videokey} child_changevideo = {child_changevideo} />)}
        </div>
    ) } else {
        return(
        <div className='relative flex flex-col gap-10'>
                {placeholderarray.map(({title, description, thumbnailkey, objectkey, videokey}:{title:string, description:string, thumbnailkey:string,  objectkey:string, videokey:string}) => <Row_WorkColumn key = {objectkey} title = {title} description = {description} imagepath = {thumbnailkey} videokey = {videokey} child_changevideo = {child_changevideo} />)}
        </div>
        )
    }

    }


export default Workcolumn