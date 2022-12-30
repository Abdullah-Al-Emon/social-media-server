const express = require('express');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(cors())
app.use(express.json());


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dqljuns.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){
    try{
        const postCollection = client.db('fireMedia').collection('post')
    }
    finally{

    }
} 


app.get('/', async(req, res) => {
    res.send('fire Media server is running')
})

app.listen(port, () => console.log(`fire Media running on ${port}`))