import express from "express";

const app = express();
const port = 3000;
app.get("/",(req ,res)=>{
     res.send("Index Say21fası");
});
app.listen(port, () => {
     console.log("Application running port: ${port}");
})