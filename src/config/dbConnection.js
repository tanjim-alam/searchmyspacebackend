import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://realdatabase:imQXdV9Ve8H4Aehj@cluster0.symdr6d.mongodb.net/searchmyspace");
    console.log("✅ DB Connected Successfully");
  } catch (error) {
    console.error("❌ Failed to connect to DB:", error.message);
    process.exit(1); // stop server if DB connection fails
  }
};

export default dbConnection;
