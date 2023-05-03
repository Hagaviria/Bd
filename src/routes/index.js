 const { Router } = require('express');


 const router = Router();

// // Models
const Image = require('../models/image');


router.get('/',async(req,res)=>{
    res.send('index');
});

 router.get('/upload', (req, res) => {
    res.render('upload');
 });
router.post ('/upload',(req, res) => {
   console.log(req,file);
   res.render('uploaded');
});

 router.get('/image/:id',(req,res)=>{
    res.send('Profile Image');
 });
 
 router.get('/image/:id/delete',(req,res)=>{
    res.send('Image deleted');
 });
 router.post('/upload', async (req, res) => {
    const image = new Image();
    image.title = req.body.title;
    image.description = req.body.description;
     image.filename = req.file.filename;
    image.path = '/img/uploads/' + req.file.filename;
     image.originalname = req.file.originalname;
     image.mimetype = req.file.mimetype;
    image.size = req.file.size;

     await image.save();
     res.redirect('/');
 });


 module.exports = router;