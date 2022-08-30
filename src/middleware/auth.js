const jwt =require("jsonwebtoken");



const validatetoken= function(req,res,next){
    let token =req.headers['x-Auth-token'];


    if (!token)
    return
    res.send({status :false,msg:"token must be present"})
    console.log(token);



    let decodedToken=jwt.varify(token,"kunal-lohakare");
    if(!decodedToken){
        return
        res.send ({status:false ,msg:"token is invalid"});
    }
    req.loggedInUser=decodedToken.userId
    next()
}

const checkIfAuthorized=function(req,res,next){
    let requestedUserId = req.params.userId
    if(requestedUserId !== req.loggedInUser) {
        return res.send({status:false,msg:"permission denied"})
    }
    next()
}
module.exports.validatetoken=validatetoken
module.exports.checkIfAuthorized=checkIfAuthorized
