import {useState, useEffect} from 'react';
import  Row_WorkColumn from './Row_WorkColumn';
import {video_type, placeholderarray} from '../data'


function Workcolumn({pastworkarray, child_changevideo}:{pastworkarray:video_type[], child_changevideo:(videokey:string,title:string, description:string) => void}){

    const [arrayreturned, changearray] = useState<boolean>(false);

    useEffect(() => {
        if (pastworkarray.length > 0) {
        changearray(true);
        }
    }, [pastworkarray]);

    
    if(arrayreturned){
        return( 

            <div className='flex flex-col gap-10 mt-3 '>
                    {pastworkarray.map(({title, description, thumbnailkey, _id, videokey}:{title:string, description:string, thumbnailkey:string,  _id:string, videokey:string}) => <Row_WorkColumn key = {_id} title = {title} description = {description} imagepath = {thumbnailkey} videokey = {videokey} child_changevideo = {child_changevideo} />)}
            </div>

    ) } else {
        return(
            <div className='flex flex-col gap-10 mt-3'>
                    {placeholderarray.map(({title, description, thumbnailkey, _id, videokey}:{title:string, description:string, thumbnailkey:string,  _id:string, videokey:string}) => <Row_WorkColumn key = {_id} title = {title} description = {description} imagepath = {thumbnailkey} videokey = {videokey} child_changevideo = {child_changevideo}/>)}
            </div>
        )
    }

    }


export default Workcolumn