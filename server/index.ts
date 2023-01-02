import express from 'express';
import {db} from './datastore/index';

const app = express();


app.use(express.json());


app.get('/', (req, res) => {
    res.send("Hello World!");
})


app.post('/posts', (req, res) => {
    console.log(req.body);
    
    db.createPost(req.body);
    res.send("Created");
})

app.get("/posts", (req, res) => {
    res.send({ posts:db.listPosts() });
})

app.listen(5000);