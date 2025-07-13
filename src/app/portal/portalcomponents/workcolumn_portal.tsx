import  Row_workcolumn_portal from './row_workcolumn_portal';
import {video_type_portal} from '../../data'


function Workcolumn_portal({videoarray, deletevideo_init}:{videoarray:video_type_portal[],  deletevideo_init:({_id, thumbnailkey, videokey}:{_id:string, thumbnailkey:string, videokey:string}) => void}){
        

        return( 
        <div className='relative flex flex-col gap-10'>
                {videoarray.map(({title, description, thumbnailkey, _id, videokey, imagepath}:{title:string, description:string, thumbnailkey:string,  _id:string, videokey:string, imagepath:string}) => <Row_workcolumn_portal key = {_id} title = {title} description = {description} imagepath = {imagepath} thumbnailkey ={thumbnailkey} videokey = {videokey} _id = {_id} deletevideo_init = {deletevideo_init} />)}
        </div>
    ) 

    }


export default Workcolumn_portal