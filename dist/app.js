import express from "express";
import userRoute from "./routes/user.js";
import { connectDB } from "./utilis/features.js";
const port = 3000;
connectDB();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("API is Working");
});
// Using Routes
app.use("/api/v1/user", userRoute);
app.listen(port, () => {
    console.log("My Express Server is working on https://localhost:${port}");
});
