import { Userorm } from "../src/Entities/user";
import {  getConnection,getRepository } from "typeorm";


export const insertuser= async (req:any,res:any)=>{
    //console.log(req.body);
    console.log("connected");
    const{firstname, lastname, username,password,address}=req.body;

    const adduser=  Userorm.create({
        firstname:firstname,
        lastname:lastname,
        username:username,
        password:password,
        address:address
    })
        await adduser.save();
        return res.json(adduser);
    
};
export const selectuser= async (req:any,res:any)=>{
    //const userormtable=await getRepository(Userorm).createQueryBuilder("userormtable").getMany();
    const useormtable = await getConnection().
        
    /* You can use getrepository and createquerybuilder(tablename) for avoid of wrting .select("userormtable")
        .from(Userorm,"userormtable") */    

        getRepository(Userorm).
        createQueryBuilder('userormtable')

        /* .select("userormtable")
        .from(Userorm,"userormtable") */
        
        
        .where("userormtable.id=:id",{id:1}).getOne();
        
    console.log(useormtable);
};

export const updateuser=async(req:any,res:any)=>{
    const updateuserorm=await getConnection()
    .createQueryBuilder()
    .update(Userorm)
    .set({firstname:"jeel",lastname:"patel",username:'jeel',password:"jeel@123"})
    .where("id=:id",{id:6})
    .execute();

    console.log(updateuserorm);
};

export const deleteuser=async(req:any,res:any)=>{
    const deleteuser=await getConnection().createQueryBuilder().delete().from(Userorm).where("id=:id",{id:4})
    .execute();
    console.log(deleteuser);
};