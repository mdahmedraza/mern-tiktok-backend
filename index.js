const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

const videoRoutes=require('./api/routes/videos')

mongoose.connect("mongodb://127.0.0.1:27017/tiktokDBs",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('db connected')
}).catch((e)=>{
    console.log('not connected')
})
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/video', videoRoutes);

app.get('/', (req, res, next)=>{
    res.status(200).json({
        message: "this is the begining....."
    })
})
app.use((req, res, next)=>{
    const error=new Error('not found');
    error.status=404
    next(error)
})
app.use((error, req, res, next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message: error.message
        }
    })
})
app.listen(9000);