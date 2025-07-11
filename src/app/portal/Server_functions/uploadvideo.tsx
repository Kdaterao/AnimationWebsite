

export default async function UploadVideo(event: React.SyntheticEvent){
        event.preventDefault();
        const form = event.currentTarget as HTMLFormElement;
        //------------ Getting Variables ready for the fetch requests
        
        const target= event.target as typeof event.target & {
        thumbnail:HTMLInputElement;
        video:HTMLInputElement;
        title:HTMLInputElement;
        description:HTMLInputElement;
        };

        const videoData = new FormData();
        videoData.append("file", target.video.files?.[0]!);

        const thumbnailData = new FormData();
        thumbnailData.append("file", target.thumbnail.files?.[0]!);

        //-----------------------------------
        const result_r2_video = await fetch('/api/login/r2request',{

            method: 'POST',
            headers: {"objectkey":target.video?.files?.[0]?.name! },
            body: videoData,
            
        }).then(r => r.json());

        const result_r2_thumbnail = await fetch('/api/login/r2request',{

            method: 'POST',
            headers: {"objectkey":target.thumbnail?.files?.[0]?.name! },
            body: thumbnailData,
            
        }).then(r => r.json());
        

        const result_db = await fetch('/api/login/mongodbrequest',{

            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                thumbnail: target.thumbnail?.files?.[0]?.name,
                video: target.video?.files?.[0]?.name,
                description: target.description.value,
                title: target.title.value,
            }),
        }).then(r => r.json());


        console.log(result_r2_video)
        console.log(result_r2_thumbnail)
        console.log(result_db)

        form.reset()
    }