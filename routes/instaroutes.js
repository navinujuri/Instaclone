const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const post = require('../models/posts')
// const fileUpload=require('express-fileupload')
const path = require('path')
let savedFileName;
const cors = require('cors')
router.use(cors());

const multer = require('multer')
const fileUpload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './uploads')//folder name in root diretory ie where root>npm start
        },
        filename: (req, file, cb) => {
            // console.log(file.fieldname)
            savedFileName = file.fieldname + Date.now() + '.jpg';
            cb(null, savedFileName)
        }
    })
}).single('file')//key
// router.use(fileUpload());



router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());


router.get('/', (req, res) => {
    res.status(200).send({
        status: "success",
        message: "welcome to homepage "
    })
})

//sends json data  to client for post view page
router.get('/postview', async (req, res) => {
    let data = await post.find({})
    console.log(data)
    res.status(200).json({
        status: "success",
        data
    })
})

//sends img file to postviewpage through img tag
router.get('/pics/:filename', async (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '..', 'uploads', req.params.filename))
})
// creates a post data in db
router.post('/postupload', fileUpload, async (req, res) => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;

    //  console.log(req.body,req.files.file)// {} undefined
    // console.log(req.body, req.file, savedFileName)
    const incomingpost = {
        name: req.body.name,
        location: req.body.location,
        likes: parseInt(Math.random() * 100),
        description: req.body.description,
        postImage: savedFileName,
        date: formattedToday
    }

    //console.log(incomingpost)



    let newpost = await post.create(incomingpost)
    //     let data =await post.find({})
    // console.log(data)
    //console.log(newpost)
    res.status(200).json({ status: "sucess", newpost })


})

module.exports = router
