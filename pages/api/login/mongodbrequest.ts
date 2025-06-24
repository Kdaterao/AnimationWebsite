

import clientPromise from "./mongodbconnect";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

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

        return res.json(videos);
}
