const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const blogs = require("./routes/blog.route");
const userRoute = require('./routes/user.route');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//Connect to mongodb
const connectToDatabase = async () => {
    try {
        mongoose.connect(URI);
        console.log("Connected To mongodb");
    } catch (error) {
        console.log("Error", error);
    }
}
connectToDatabase();

//connect routes
app.use("/api/v1", blogs);
app.use("/api/v1/user", userRoute)


app.listen(PORT, () => {
    console.log(`Port is running ${PORT}`);
});


