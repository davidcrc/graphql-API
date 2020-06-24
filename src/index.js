/**
 * 
 */
import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

import { connect } from "./database";

const app = express()
const port = 4000;
connect();

app.get('/', (req, res) =>{
    res.json({
        message: 'Hello world'
    })
})


// const schema = {}

// Esta ruta sirve para consultar y obtener datos
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {                      // para poder pasar cosas al resolver
        messageId: 'test'
    }
}))


app.listen(port, () => {
    console.log("Server on port "+ port )
})