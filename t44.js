// import express from 'express';
// import upload from '../middlewares/multer';
// import cloudinary from 'cloudinary';
// import Blog from '../models/blog';

// const router = express.Router();

// // Configure Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

// // Create a new blog post
// router.post('/', upload.single('image'), async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload(req.file.path);
//     const blog = new Blog({
//       title: req.body.title,
//       image: result.secure_url,
//       content: req.body.content
//     });
//     await blog.save();
//     res.status(201).json(blog);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// export default router;
