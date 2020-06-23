/**
 * Define lo que puede devolver, dependiendo de lo q especificaste en schema
 */
import { tasks } from "./sample";

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world with graphQl'
        },
        greet: (root, {name}) => {
            // console.log("el arg " + args.name)
            return `Hello ${name}!`;
        },
        tasks() {
            return tasks;
        }
    },
    Mutation: {
        createTask(_ , { input }){
            input._id = tasks.length
            tasks.push(input)
            
            console.log(input)
            return input
        }
    }
}