const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Video=require('../models/video')

router.get('/', (req, res, next)=>{
    Video.find()
    .exec()
    .then(docs=>{
        console.log(docs);
        res.status(200).json(docs);
    }).catch(err=>{
        console.log(err);
        res.status(400).json({
            error: err
        })
    })
})
router.post('/', (req, res, next)=>{
    const video=new Video({
        _id: new mongoose.Types.ObjectId(),
        url: req.body.url,
        channel: req.body.channel,
        description: req.body.description,
        song: req.body.song,
        likes: req.body.likes,
        shares: req.body.shares,
        messages: req.body.messages
    })
    video.save().then(result=>{
        console.log(result)
        res.status(201).json({
            message: "this is the videos post request....",
            createdVideo: result
        })
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})
module.exports=router;