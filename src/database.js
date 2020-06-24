import mongoose from "mongoose";

export async function connect(){
    try {
        await mongoose.connect('mongodb://localhost/mongodbgraphql', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex:true, 
            "auth": {
                "authSource": "admin"
            },
            "user": "admin",
            "pass": "admin123"
        })
    
        console.log(">>> db is connected ")
    } catch (error) {
        console.log(">>> someting went wrong "+error)
        
    }
}
