// import multer from 'multer';

// const storage = multer.diskStorage({
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   }
// });

// const fileFilter = (req, file, cb) => {
//   if (
//     file.mimetype === 'image/jpeg' ||
//     file.mimetype === 'image/png' ||
//     file.mimetype === 'image/gif'
//   ) {
//     cb(null, true);
//   } else {
//     cb(null, false);
//     return cb(new Error('Only .jpg, .png, .gif formats are allowed!'));
//   }
// };

// const upload = multer({ storage, fileFilter });

// export default upload;
