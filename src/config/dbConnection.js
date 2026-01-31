import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnection = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    const uri = process.env.MONGO_URI || "mongodb+srv://realdatabase:imQXdV9Ve8H4Aehj@cluster0.symdr6d.mongodb.net/searchmyspace";
    if (!uri) throw new Error("MONGO_URI not defined in environment variables");

    cached.promise = mongoose.connect(uri).then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default dbConnection;
