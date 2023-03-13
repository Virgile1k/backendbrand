import mongoose from "mongoose";

// Define the MongoDB connection string and database name
const uri = 'mongodb+srv://Vg1k:NDAYAMBAJE@cluster0.o4fvswa.mongodb.net/testdb?retryWrites=true';

mongoose.set('strictQuery', false);
const cleanup = async () => {
    await mongoose.connect(uri, { useNewUrlParser: true });
    await mongoose.connection.dropDatabase();
    await mongoose.disconnect();
};

export default cleanup()