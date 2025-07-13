import Workcolumn_portal from './workcolumn_portal'
import {video_type_portal} from '../../data'
import deletevideo from '../Server_functions/deletevideo'

function Deletevideocomponent({videoarray}:{videoarray:video_type_portal[]}){

    function deletevideo_init({_id, thumbnailkey, videokey}:{_id:string, thumbnailkey:string, videokey:string}){


    if (window.confirm("Are you sure?")) {
        console.log(_id)
        console.log(thumbnailkey)
        console.log(videokey)

        deletevideo({_id:_id, thumbnailkey:thumbnailkey, videokey:videokey})
    } 
    
    }

    return(
        <div className = 'bg-amber-500'>
            <Workcolumn_portal videoarray = {videoarray} deletevideo_init = {deletevideo_init}/>
        </div>
    )
}

export default Deletevideocomponent;