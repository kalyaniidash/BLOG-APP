import express from "express"
import  adminLogin, { approvedCommentById,  deleteCommentById,  getAllComments, getBlogAdmin, getDashboard }  from "../controllers/adminController.js";
import auth from "../middleware/auth.js";


const adminRouter = express.Router();
adminRouter.post("/login",adminLogin);
adminRouter.get("/comments",getAllComments);
adminRouter.get("/blogs",getBlogAdmin); //auth deleted
adminRouter.post("/delete-comment",deleteCommentById);
adminRouter.post("/approve-comment",approvedCommentById);
adminRouter.get("/dashboard",getDashboard);


export default adminRouter; 