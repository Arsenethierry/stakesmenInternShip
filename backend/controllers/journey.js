import { client } from "../database/connection.js";
import { types } from "cassandra-driver";

var fetchAllEvents = "SELECT * FROM user_journey.userjourney";


export const pushEvent = async(req,res)=>{
    var pushEventQuerry = `INSERT INTO user_journey.userjourney (id, user_id, session_start_ts,(events))
    VALUES ( ${types.TimeUuid.now()}, ${req.body.user_id},${types.TimeUuid.now()}, { ${req.body.type},${req.body.pagePath},${req.body.ts},${req.body.actionName}} } );`
    
    //var pushEventQuerry = `INSERT INTO user_journey.userjourney (id, user_id, session_start_ts,userjourney.events(type,pagePath,ts,actionName))
    //VALUES (uuid(),?,toTimestamp(now()),?,?,?,?)`;

    //const pushEvent = `insert into user_journey.clientjourney(id,user_id,eventactionname,eventpagepath,eventtype) values('7ab09bec-e68e-48d9-a5f8-fb4c9b47',
    //'user12345',{'scrolling'},{'/homepage/1'},{'onChange'} );`

    
    try {
        
        //await client.execute(pushEventQuerry);
        await client.execute(pushEventQuerry)
       res.status(201).json("new record added successfully");

    } catch (error) {
        res.status(404).send({ message: error });
        console.log(error);
    }
}

export const fetchEvents = async(req,res)=>{
    try {
        const results = await client.execute(fetchAllEvents);
        console.log(results.rows);

        res.status(200).json(results.rows);
    } catch (error) {
        console.log(error)
    }
}