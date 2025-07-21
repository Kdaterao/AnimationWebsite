import { MongoClient, ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server";
import {ObjectId} from 'mongodb'



const clientpromise = new MongoClient(process.env.MONGODB_URI!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

//-------------------------------------------------------------------

export async function GET() {
        try {
        const client = await clientpromise.connect();
        const db = client.db("animationmango_database");
        console.log("You successfully connected to MongoDB!");
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
        } finally {
                await clientpromise.close();
                console.log("Mongodb connection closed");
        }
}






export async function POST(request:Request){

        const {video,title,description,thumbnail} :{video:string,title:string,description:string,thumbnail:string} = await request.json();
        try{
        const client = await clientpromise.connect();
        const db = client.db("animationmango_database");
        const result = await db.collection("users").insertOne({"videokey":video,"title":title,"description":description,"thumbnailkey":thumbnail});
        return  NextResponse.json( `A document was inserted with the _id: ${result.insertedId}`)
        } finally {
                await clientpromise.close();
        }
};







export async function DELETE(request:Request){
        const {_id}:{_id:string} = await request.json();
        console.log(_id)

        try {
        const client = await clientpromise.connect();
        const db = client.db("animationmango_database");
        
        const result = await db.collection("users").deleteOne( { _id: new ObjectId(_id) } )
        
        if (result.deletedCount === 0) {
            return NextResponse.json({ error: 'User not found or already deleted' }, { status: 404 });
        }

        return NextResponse.json(`printed object ${_id}`);
        } finally {
                await clientpromise.close();
        }

}
