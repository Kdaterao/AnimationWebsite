import { MongoClient } from "mongodb";

//const client = new MongoClient(process.env.MONGODB_URI!);
const client = new MongoClient('mongodb+srv://akdaterao:LBuRY8fYfnyje@animationmango.2skt97e.mongodb.net/?retryWrites=true&w=majority&appName=animationmang');

const clientPromise = client.connect();

export default clientPromise;