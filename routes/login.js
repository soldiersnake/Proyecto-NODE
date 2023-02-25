const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=> {

    res.render('login');
});

router.post('/', (req, res, next)=>{
    console.log(req.body);
    if(req.body.usuario != "" && req.body.password != ""){
        res.render('login', {messege: 'Usuario aprobado'});
    }else{
        res.render('login', {messege: 'Datos Incorrectos'});
    }
})


module.exports = router;