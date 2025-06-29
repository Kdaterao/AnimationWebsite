import clientPromise from "./mongodbconnect";
import { NextResponse } from "next/server";

export async function GET() {

        const client = await clientPromise;
        const db = client.db("animationdb");
        const videodb = await db
            .collection("yourCollectionName")
            .find({})
            .limit(10)
            .toArray();
        const videos = videodb.map(video => ({
        ...video,
        _id: video._id.toString(),
        }));

        return NextResponse.json(videos);
}
