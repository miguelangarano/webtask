const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)
const {MongoClient} = require('mongodb');
var cors = require('cors');
app.use(cors());

async function connectMongo(){
    const uri = "mongodb+srv://testuser:miguel123@cluster0.smdj6.mongodb.net/test";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await client.connect();
        return client
    } catch (e) {
        console.error(e);
        return null
    }
}

connectMongo()

async function getCars(client){
    let data = await client.db("carsbd").collection('cars').find({});
    return data
}

app.get('/cars/all', async(req, res)=>{
    /*
    {}
    */
   let client = await connectMongo()
   if(client!==null){
        let data = await getCars(client)
        data.toArray((error, result)=>{
            if(error){
                res.status(200).send({ message: 'Error. No results', status: false, data: null })
                return null
            }else{
                res.status(200).send({ message: 'Success', status: true, data: result })
                return null
            }
        })
   }else{
        res.status(200).send({ message: 'Error. The query failed', status: false, data: null })
   }
})

const port = process.env.PORT || 3880
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Content-Type', 'application/json')
    req.header('Access-Control-Allow-Origin', '*')
    req.header('Content-Type', 'application/json')
    next();
});




app.listen(port, () => {
    console.log('Server is up on port ' + port)
})