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

        app.post("/post", async(req, res) => {
            const post = req.body;
            const result = await postCollection.insertOne(post);
            res.send(result)
        })

        
        app.get('/post', async(req, res) => {
            const query = {};
            const posting = await postCollection.find(query).toArray();
            res.send(posting)
        })

    }
    finally{

    }
} 

run().catch(err => console.log(err))


app.get('/', async(req, res) => {
    res.send('fire Media server is running')
})

app.listen(port, () => console.log(`fire Media running on ${port}`))