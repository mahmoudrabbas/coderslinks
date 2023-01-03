import { RequestHandler } from "express";
import { db } from "../datastore";


export const createPostHandler: RequestHandler = (req, res) => {
    db.createPost(req.body);
    res.send("Created");
}


export const listPostsHandler: RequestHandler = (req, res) => {
    res.send({ posts:db.listPosts() });
};