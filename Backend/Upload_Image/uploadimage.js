const multer = require("multer");
const path = require("path");

//multer disk storage
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        return cb(null,"./upload/images")
    },
    filename:function(req,file,cb){
        return cb(null,`${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
    }
})

//upload
const upload = multer({storage:storage});

module.exports = {upload};