

export default async function DeleteVideo({_id, thumbnailkey, videokey}:{_id:string, thumbnailkey:string, videokey:string}){

        console.log(_id)
        console.log(thumbnailkey)
        console.log(videokey)

        const result_r2_video = await fetch('/api/login/r2request',{

            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({filekey:videokey}),
            
        }).then(r => r.json());

        const result_r2_thumbnail = await fetch('/api/login/r2request',{

            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({filekey:thumbnailkey}),
            
        }).then(r => r.json());
        

        const result_db = await fetch('/api/login/mongodbrequest',{

            method: 'DELETE',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({_id:_id}),
        }).then(r => r.json());


        console.log(result_r2_video)
        console.log(result_r2_thumbnail)
        console.log(result_db)


    }