import express from "express";
const app=express();
import  createConnection   from "./ormconfig";
import { apps } from "./router/routerinsertuser";

app.use(express.json())

app.use(apps);

if(createConnection){
    console.log("database connected");
}
else{
    console.log("not connected");
}
app.listen(8780,()=>console.log('server running at port 8780'));