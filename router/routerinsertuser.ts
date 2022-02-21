import  Express, { Router }  from "express";
import {insertuser,selectuser,updateuser,deleteuser}   from "../usercontroller/usercontroller";

const route= Express.Router();

    route.post('/insertuser',insertuser,insertuser);
    route.get('/select/:id',selectuser,selectuser);
    route.put('/updateuser/:id',updateuser,updateuser);
    route.delete('/deleteuser/:id',deleteuser,deleteuser);
export{route as apps};