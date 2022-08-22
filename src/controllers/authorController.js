const Authormodel = require("../models/authormodel")
const { model } = require("mongoose")

const createAuthor = async function (req, res) {
    let input = req.body
    let authors = await Authormodel.create(input)
    res.send({ msg: authors })
}

module.exports.createAuthor = createAuthor