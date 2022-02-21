import  Express, { Router }  from "express";
import {insertuser,selectuser,updateuser,deleteuser}   from "../usercontroller/usercontroller";

const route= Express.Router();

    route.post('/insertuser',insertuser,insertuser);
    route.get('/select',selectuser,selectuser);
    route.put('/updateuser',updateuser,updateuser);
    route.delete('/deleteuser',deleteuser,deleteuser);
export{route as apps};