import clientPromise from "./mongodbconnect";
import { NextResponse } from "next/server";
import {ObjectId} from 'mongodb'


export async function GET() {
        const client = await clientPromise;
        const db = client.db("animationmango_database");
        
        const videodb = await db
            .collection("users")
            .find({})
            .limit(10)
            .toArray();
        
        const videos = videodb.map(video => ({
        ...video,
        _id: video._id.toString(),
        }));

        return NextResponse.json(videos);
}



export async function POST(request:Request){

        const {video,title,description,thumbnail} :{video:string,title:string,description:string,thumbnail:string} = await request.json();
        
        const client = await clientPromise;
        const db = client.db("animationmango_database");
        const result = await db.collection("users").insertOne({"videokey":video,"title":title,"description":description,"thumbnailkey":thumbnail});
        return  NextResponse.json( `A document was inserted with the _id: ${result.insertedId}`)
    
};


export async function DELETE(request:Request){
        const {_id}:{_id:string} = await request.json();
        console.log(_id)
        const client = await clientPromise;
        const db = client.db("animationmango_database");
        try {
        const result = await db.collection("users").deleteOne( { _id: new ObjectId(_id) } )
        
        if (result.deletedCount === 0) {
            return NextResponse.json({ error: 'User not found or already deleted' }, { status: 404 });
        }

        return NextResponse.json(`printed object ${_id}`);
        } catch(e) {
                
        return  NextResponse.json(e)
        }


}
