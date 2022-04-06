import { getRepository } from "typeorm";
import { Users } from "../entities/Users";

type UsersRequest = {

    name: string;
    password: string;
}

export class CreateUsersService {

   async execute ({name, password}: UsersRequest): Promise<Users | Error> {

        const repo = getRepository(Users);

        // SELECT * FROM CATEGORIES WHERE NAME = "NAME" LIMIT 1 
        if(await repo.findOne({name})) {

            return new Error("Category already exists");

        }
        
        const users = repo.create({

            name,
            password

        });


    await repo.save(users);

    return users;
       
   }
}