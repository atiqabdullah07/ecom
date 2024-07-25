import mongoose from "mongoose";
export const connectDB = () => {
    mongoose
        .connect("mongodb+srv://atiqabdullah86:imPSfrs34QeXHegr@cluster0.sqmd12w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
        dbName: "Stargate",
    })
        .then((c) => {
        console.log("Database Connected");
    })
        .catch((e) => console.log(e));
};
