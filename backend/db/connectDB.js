import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(mongodb+srv://gaurav:gaurav26@cluster0.sdfcmq4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0, {
			// To avoid warnings in the console
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
