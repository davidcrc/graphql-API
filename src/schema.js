/**
 * Define que es lo que puede consultar
 */
import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolver";


const typeDefs =  ' type Query {  hello: String greet(name: String!): String  tasks: [Task] }  type Task { _id: ID  title: String  number: Int } type Mutation{ createTask(input: TaskInput ): Task }  input TaskInput { title: String! description: String! number: Int  } ';


export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})
