import { Userorm } from "../src/Entities/user";
import {  Any, getConnection,getRepository } from "typeorm";


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
    
    const {id}=req.params;
    const useormtable = await getConnection().
       
    /* You can use getrepository and createquerybuilder(tablename) for avoid of wrting .select("userormtable")
        .from(Userorm,"userormtable") */    
        getRepository(Userorm).
        createQueryBuilder('userormtable')

        /* .select("userormtable")
        .from(Userorm,"userormtable") */
        .where("userormtable.id=:id",{id:id}).getOne();
        
    console.log(useormtable);
};

export const updateuser=async(req:any,res:any)=>{
        const {id}=req.params;
        const {firstname,lastname,username,password,address}=req.body;
        const updateusers= await getConnection()
        .createQueryBuilder()
        .update(Userorm)
        .set({firstname:firstname,lastname:lastname,username:username,password:password,address:address})
        .where("id=:id",{id})
        .execute();
        return res.json(updateusers);

};

export const deleteuser=async(req:any,res:any)=>{
    const {id}=req.params;
    const deleteuser=await Userorm.delete({
            id,
    });
    return res.json(deleteuser);
};