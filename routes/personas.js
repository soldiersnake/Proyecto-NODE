const express = require('express');
const router = express.Router();

router.get('/:id/:nombre', (req, res, next)=>{
    console.log(req.params);
    let cliente = req.params;
    res.render('personas', {clienteID: cliente.id, clienteNombre: cliente.nombre});
})

router.get('/', (req, res, next)=>{
    res.render('personas');
});

module.exports = router;