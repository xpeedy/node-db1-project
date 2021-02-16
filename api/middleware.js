const Accounts = require("./accounts/account-model")


function validateAccountId(req, res, next) {
    const {id} = req.params
    Accounts.getByID(id).then(account => {
        !account ?
        res.status(404).json({message:"account not found"}) :
        next()
    })
}

function validateAccountBody(req, res, next) {
    const { name } = req.body
    // !req.body.name || !req.body.budget ?
    !name ?
    res.status(400).json("body required") :
    next()
}


module.exports = {
    validateAccountId,
    validateAccountBody
}