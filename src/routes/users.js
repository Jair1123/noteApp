const router = require('express').Router();

router.get('/users/signin',(req,res)=>{
    // res.render('../views/users/signin.hbs');
    res.render('users/signin.hbs');
})

router.get('/users/signup',(req,res)=>{
    // res.render('../views/users/signup.hbs');
    res.render('users/signup.hbs');
})

module.exports = router;