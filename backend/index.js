import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import { client } from "./database/connection.js";
import journeyRouter from './routes/journey.js';


const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/events', journeyRouter);
app.get('/',(req,res)=>{
    res.send("Welcome To Books Web app")
})

const port = process.env.PORT || 5000;

await client.connect()
            .then(()=>{
                app.listen(port,()=> console.log(`database connected and server running on port ${port}`))
            })
            .catch((error)=> console.log("error occured: ", error))