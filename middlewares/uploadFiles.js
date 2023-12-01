const multer = require("multer");
const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} = require('multer-storage-cloudinary');

const {CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET} = process.env;

cloudinary.config({
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: async (req, file) => {
        let folder = 'mics';
        if (file.fieldname === 'notice_image') folder = 'notices';
        if (file.fieldname === 'pet_image') folder = 'pets';
        if (file.fieldname === 'user_avatar') folder = 'avatars';

        return {
            folder: folder,
            allowed_formats: ["jpg", "jpeg", "png"],
            public_id: file.originalname,
            transformation: [
                {width: 300, height: 300, gravity: "face", crop: "fill"},
                {quality: "auto"},
                {fetch_format: "auto"}
            ],
        };
    },
});

const upload = multer({storage});

module.exports = upload;
