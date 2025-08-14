import fs from 'fs';
import imagekit from '../configs/imagekiit.js';
import Comment from '../models/Comment.js';
import Blog from '../models/Blog.js'
import main from '../configs/gemini.js';

export const AddBlog = async (req, res) => {
    try {
        const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog);
        const imageFile = req.file;

        if (!title || !description || !category || !imageFile) {
            return res.json({ success: false, message: "Missing required fields" });
        }

        const fileBuffer = fs.readFileSync(imageFile.path);

        const uploadResponse = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: '/blogs'
        });

        const optimizedImageUrl = imagekit.url({
            path: uploadResponse.filePath,
            transformation: [
                { quality: 'auto' },
                { format: 'webp' },
                { width: '1280' }
            ]
        });

        const image = optimizedImageUrl;

        await Blog.create({ title, subTitle, description, category, image, isPublished });

        res.json({ success: true, message: "Blog added successfully" });
    } catch (error) {
        console.error("Error adding blog:", error);
        res.json({ success: false, message: error.message });
    }
};


// fetch all the comments from your MongoDB
export  const getAllblogs = async(req,res)=>
{
    try{
        const blogs = await Blog.find({isPublished:true})
        res.json({success:true,blogs})
    }
    catch(error)
    {
        res.json({success:false,message:error.message})
    }
}

export const getBlogById = async (req, res) => {
    try {
        const blogId = req.params.blogId.trim(); // ✅ trim to avoid \n errors
        const blog = await Blog.findById(blogId);

        if (!blog) {
            return res.json({ success: false, message: "Blog not found" });
        }

        res.json({ success: true, blog }); // ✅ return the blog
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};

export const deleteBlogById = async(req,res)=>
{
    try{
        const{id} = req.body;
        await Blog.findByIdAndDelete(id);
        res.json({success:true,message:"blog deleted successfully"})
    }
    catch(error)
    {
                res.json({success:false,message:error.message})

    }
}
export const togglePublish = async (req, res) => {
    try {
        const { id } = req.body;
        const blog = await Blog.findById(id); // ✅ small 'b'
        if (!blog) {
            return res.json({ success: false, message: "Blog not found" });
        }
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.json({ success: true, message: "Blog status updated" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};
export const addComment= async(req,res)=>
{
    try{
            const {blog,name,content} = req.body;
            await Comment.create({blog,name,content})
            res.json({success:true,message:"comment added for review"})
    }
    catch(error)
    {
                res.json({success:false,message:error.message})

    }
}
// comments data for individual blog
export const getBlogComments= async(req,res)=>
{
    try{
            const {blogId} = req.body;
            const comments = await Comment.find({blog:blogId,isApproved:true}).sort({createdAt:-1});

            res.json({success:true,comments})
    }
    catch(error)
    {
                res.json({success:false,message:error.message})

    }
}
export const generateContent = async(req,res)=>
{
    try
    {
        const {prompt} =req.body;
        const content = await main(prompt + ' generate a blog content for this topic in simple text format');
res.json({ success: true, content });

    }
    catch(error)
    {
                res.json({success:false,message:error.message})

    }
}