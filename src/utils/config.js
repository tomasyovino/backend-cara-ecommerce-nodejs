import dotenv from "dotenv";

dotenv.config();

const config = {
    PORT: process.env.PORT,
    mongo_uri: process.env.MONGO_URI,
    jwt_sec: process.env.JWT_SECRET
};

export default config;