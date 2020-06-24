/**
 * Define lo que puede devolver, dependiendo de lo q especificaste en schema
 */
import { tasks } from "./sample";

import User from "./models/User";

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world with graphQl'
        },
        greet: (root, {name}, ctx) => {
            // console.log("el arg " + args.name)
            console.log(ctx)
            return `Hello ${name}!`;
        },
        tasks() {
            return tasks;
        },
        async Users(){
            const users = await User.find()
            return users
        }
    },
    Mutation: {
        createTask(_ , { input }){
            input._id = tasks.length
            tasks.push(input)
            
            console.log(input)
            return input
        },
        async createUser( _ , {input} ){
            const newUser = new User(input)
            await newUser.save()
            console.log(newUser)

            return newUser;
        },
        async deleteUser(_ , { _id }){
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_ , { _id, input }){
            return await User.findByIdAndUpdate(_id, input, {new: true} );          // new devolvera el dato actualizado
        }

    }
}