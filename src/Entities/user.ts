import {Entity,PrimaryGeneratedColumn,Column, BaseEntity  } from "typeorm";

@Entity()
export class Userorm extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    firstname!:string;

    @Column()
    lastname!:string;

    @Column()
    username!:string;

    @Column()
    password!:string;

    @Column()
    address!:string;
}

/* let userrepo=connection.getRepository(Userorm);
await userrepo.save(adduser); */