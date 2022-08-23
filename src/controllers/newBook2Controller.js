const book2 = require('../models/newBook2.js')
const authorModel2 = require('../models/authorModel2.js')
const newPublisher = require('../models/newPublisher.js')

const newBook2 = async function (req,res){
    let data = req.body
    let authorBookId = await authorModel2.findById(data.author_id)
    let publisherId = await newPublisher.findById(data.publisher_id)
    if(!data.author_id){
        return res.send({msg:"author detail is required"})
    }
    else if(!authorBookId){
        return res.send({msg: " author Id is invalid"})
    }
    else if(!data.publisher_id){
        return res.send({msg: "publisher detail is rquired"})
    }
    else if(!publisherId){
        return res.send({msg: "publisher Id is invalid"})
    }
    let createNewBook2 = await book2.create(data)
    return res.send({msg:createNewBook2})
    }
const getAllBooksByTheirId = async function(req,res){
    let allBooks = await book2.find().populate(['author_id','publisher_id'])
    res.send({msg:allBooks})
}

const updateData = async function(req, res){
    let bookPublishedUpdate = await newPublisher.find({name:{$in:["Penguin","HarperCollinse"]}})
    let bookBymodel = await book2.find({publisher_id:bookPublishedUpdate}).updateMany({$set:{isHardCover:true, new:true}})
    let authorRating = await authorModel2.find({rating:{$gt:3.5}})
    let updatePrice = await book2.find({author_id:authorRating}).updateMany({$inc:{price:+10}})
    res.send({updatedBooks:[bookBymodel, updatePrice]})
}
module.exports={newBook2,getAllBooksByTheirId,updateData}