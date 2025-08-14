import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    subTitle: { type: String },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    isPublished: { type: String, required: true },
}, { timestamps: true });

// Use mongoose.models to avoid OverwriteModelError
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
export default Blog;
