const express = require("express")
const router = express.Router()
const Accounts = require("./account-model")
const mw = require("../middleware")


router.get("/",(req,res) => {
    Accounts.get().then(accounts => {
        res.status(200).json(accounts)
    })
})

router.get("/:id",mw.validateAccountId,(req,res) => {
    const {id} = req.params
    Accounts.getByID(id).then(account => {
        res.status(200).json(account)
    })
})

router.post("/",mw.validateAccountBody,(req,res) => {
    const body = req.body
    Accounts.create(body).then(newAccount => {
        res.status(201).json(newAccount)
    })
})

router.put("/:id",mw.validateAccountId,mw.validateAccountBody,(req,res) => {
    const id = req.params.id
    const change = req.body
    Accounts.update(id,change).then(account => {
        res.status(200).json(account)
    })
    .catch(err => {
        console.log(err)
    })
})

router.delete("/:id",mw.validateAccountId,(req,res) => {
    Accounts.remove(req.params.id).then(account => {
        res.status(200).json(account)
    })
})


module.exports = router;