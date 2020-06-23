/**
 * 
 */
import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";

const app = express()
const port = 4000;

app.get('/', (req, res) =>{
    res.json({
        message: 'Hello world'
    })
})


// const schema = {}

// Esta ruta sirve para consultar y obtener datos
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}))


app.listen(port, () => {
    console.log("Server on port "+ port )
})