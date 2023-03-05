const express = require('express');
const router = express.Router();
const service = require('./../models/heroes')

const list = (req, res) => 
    service
    .list()
    .then((response)=> res.json(response))
    .catch((e) => res.json({e}));

router.get('all', list);

module.exports = router;