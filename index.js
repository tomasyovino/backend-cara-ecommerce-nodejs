import express from "express";
import router from "./src/routes/index.js";
import config from "./src/utils/config.js";

const app = express();

app.use(express.json());
app.use("/api", router);

app.listen(config.PORT, () => {
    console.log(`Server is running at port ${config.PORT}`)
});