const router = require('express').Router();

//Aqui rendereamos los archivos de views
router.get('/',(req,res)=>{
    res.render('index.hbs');
});

router.get('/about',(req,res)=>{
    res.render('about.hbs');
})
module.exports = router;