const express = require('express');
const router = express.Router();
const Aseg = require('../models/asegurados.js');


router.get('/', async (req, res) => {
    //  res.send('LOGIN LOGIC GOES HERE');
     const asegu = await Aseg.find();

    res.json(asegu);
});

router.post('/', async (req, res) => {
    const asegu = new Aseg(req.body);
    // console.log(asegu);
    await asegu.save();
    // console.log(req.body);
    res.json({"status":"Asegurado guardado"});
});
module.exports = router;