const express = require('express');
const router = express.Router();
const Aseg = require('../models/asegurados.js');

router.get('/asegurados', async (req, res) => {
    const asegus = await Aseg.find();
    res.json(asegus);
});

router.get('/asegurados/:userId', async (req, res) => {
    const asegurado = await Aseg.findById(req.params.userId);
    res.json(asegurado)
});


router.post('/asegurados', async (req, res) => {
    const asegu = new Aseg(req.body);
    console.log(asegu)
    await asegu.save();
    res.json({"status":"Asegurado guardado"});
});


router.put('/update/:userId', async (req, res)=>{
   await Aseg.findByIdAndUpdate(req.params.userId, req.body);
});

router.delete('/delete/:userId', async (req, res) => {

    await Aseg.findByIdAndRemove(req.params.userId);
    res.json(
        {
            "status":"eliminado"

    });
});


module.exports = router;