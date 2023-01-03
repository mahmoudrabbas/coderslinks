import express from 'express';
import { createPostHandler, listPostsHandler } from './controllers/postController';

const app = express();


app.use(express.json());


app.get('/', (req, res) => {
    res.send("Hello World!");
})


app.post('/posts', createPostHandler)

app.get("/posts", listPostsHandler)

app.listen(5000);