const mongoose=require('mongoose');

const videoSchema=mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: Number,
    shares: Number,
    messages: Number
})
module.exports=mongoose.model('Video', videoSchema)