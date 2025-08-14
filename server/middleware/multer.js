import multer from "multer";
// used for middleware
const upload = multer({storage:multer.diskStorage({})})


export default upload;