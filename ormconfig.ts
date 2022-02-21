import { createConnection} from "typeorm";
import {Userorm} from "./src/Entities/user";

createConnection({
    type:"mysql",
    database:"pracaties",
    username:"root",
    password:"root",
    logging:true,
    synchronize:true,
    entities:[Userorm]
});


export default {createConnection};