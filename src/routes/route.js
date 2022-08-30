const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const {validatetoken, checkIfAuthorized}=require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

router.get("/users/:userId",validatetoken,checkIfAuthorized, userController.getUserData)

router.put("/users/:userId/posts",validatetoken,checkIfAuthorized, userController.updateUser)

router.delete('/users/:userId',validatetoken,checkIfAuthorized,userController.deleteUser)

module.exports = router;