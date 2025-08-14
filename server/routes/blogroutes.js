import express from 'express'
import upload from '../middleware/multer.js'
import auth from '../middleware/auth.js'
import {AddBlog, addComment, deleteBlogById, generateContent, getAllblogs, getBlogById, getBlogComments, togglePublish } from '../controllers/blogController.js'

const blogRouter = express.Router()
blogRouter.post("/add", upload.single('image'),AddBlog);
blogRouter.get("/all",getAllblogs);
blogRouter.post("/delete", deleteBlogById);
blogRouter.post("/toggle-publish",togglePublish);
blogRouter.post('/addcomments',addComment);
blogRouter.post('/comments',getBlogComments);
blogRouter.get("/:blogId", getBlogById);
blogRouter.post("/generate", auth,generateContent);



export default blogRouter