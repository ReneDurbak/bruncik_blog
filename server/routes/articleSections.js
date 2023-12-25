const express = require('express')
const path = require('path')
const multer = require('multer')
const router = express.Router()
const {
    getAllArticleSections,
    getArticleSection,
    createArticleSection,
    updateArticleSection,
    deleteArticleSection
} = require("../controllers/articleSectionController")


const storage = multer.diskStorage({
    destination: (req,file, cb) => {
      cb(null, 'public')
    },
    filename: (req, file, cb)=>{
      cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
      
  })
  
  const upload = multer({
    storage: storage
  })


router.get("/getAllArticleSections", getAllArticleSections)

router.get("/getArticleSection/:id", getArticleSection)

router.post("/createArticleSection", upload.fields([{ name: 'image', maxCount: 1 }, { name: 'imageClicked', maxCount: 1 }]), createArticleSection)

router.patch("/updateArticleSection/:id", updateArticleSection)

router.delete("/deleteArticleSection/:id", deleteArticleSection)


module.exports = router