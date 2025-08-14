import jwt from 'jsonwebtoken'; // Cleaner than destructuring
import Blog from '../models/Blog.js';
import Comment from '../models/Comment.js';
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.json({ success: true, token });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
export const getBlogAdmin= async(req,res)=>
{
    try{
            const blogs = await Blog.find({}).sort({createdAt:-1})
            res.json({success:true,blogs})
    }
    catch(error)
    {
                res.json({success:false,message:error.message})

    }
}

export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find()
      .populate('blog', 'title')
      .lean();

    // Filter out comments where blog is null
    const filteredComments = comments.filter(comment => comment.blog);

    res.json({ success: true, comments: filteredComments });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const getDashboard= async(req,res)=>
{
    try{
            const recentBlogs = await Blog.find({}).sort({createdAt:-1}).limit(5);
            const blogs = await Blog.countDocuments();
            const comments = await Comment.countDocuments();
            const drafts = await Blog.countDocuments();
            const dashboardData = {
                blogs,comments,drafts,recentBlogs
            }
            res.json({success:true,dashboardData})

            
    }
    catch(error)
    {
                res.json({success:false,message:error.message})

    }
}
export const deleteCommentById= async(req,res)=>
{
    try{
            const{id} = req.body;
            await Comment.findByIdAndDelete(id);
            await Comment.deleteMany({blog:id});
            res.json({success: true,message: "comment deleted successfully"});
    }
    catch(error)
    {
                res.json({success:false,message:error.message})

    }
}
export const approvedCommentById= async(req,res)=>
{
    try{
            const{id} = req.body;
            await Comment.findByIdAndUpdate(id,{isApproved:true});
            res.json({success: true,message: "comment deleted successfully"});
    }
    catch(error)
    {
                res.json({success:false,message:error.message})

    }
}


export default adminLogin;
