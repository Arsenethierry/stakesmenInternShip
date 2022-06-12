import { Client } from "cassandra-driver";


export const client = new Client({
    cloud:{
        secureConnectBundle: './misc/secure-connect-analytics.zip',


    },
    credentials:{
        username:'gjQEkTnqLSLZkqvOtCSzAywy',
        password: 'R.cLRppsvRiZI4X0sHk5Tft6ntBe_yme7-b-eiNCHGRE5UTM7Nha-29otZKXzOYl4ZHSTMrYoOXZhMOgO-sXb+LDYbw5.ghSG3Z.4ZE1.iy0FlyOObL.sivIRUht1HEx',
    },
})
