const express = require("express")
const router = express.Router()


router.get('sign-up',(res,req) => {
    res.render("sign-up.ejs")
})

module.exports = router