const r2worker:string = 'https://r2-worker.akdaterao.workers.dev' 


export async function POST(request:Request){

        const formData = await request.formData();


        const file: File = formData.get('file') as File;
        const filename:string = request.headers.get("objectkey")!
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes)
        
        console.log(filename)

        const result_r2 = await fetch(`${r2worker}/${filename}`,{

            method: 'PUT',
            headers: { "X-Custom-Auth-Key": process.env.R2_WORKER_KEY!},
            body: buffer,
            
        })

        
        return Response.json(result_r2);
};



export async function DELETE(request:Request){

        const {filekey}:{filekey:string} = await request.json()


        
        console.log(`R2_worker_sending ${filekey}`)
        
        const result_r2 = await fetch(`${r2worker}/${filekey}`,{

            method: 'DELETE',
            headers: { "X-Custom-Auth-Key": process.env.R2_WORKER_KEY!}
        })

        
        return Response.json(result_r2);
};
