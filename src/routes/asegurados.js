const express = require('express');
const router = express.Router();
const Aseg = require('../models/asegurados.js');

//Hola profe soy Juan Romero Ramos jajaja, si ve esto pongame 10
router.get('/', async (req, res) => {
    //  res.send('LOGIN LOGIC GOES HERE');
     const asegu = await Aseg.find();
    console.log(asegu);
    res.json(asegu);
});

router.post('/', async (req, res) => {
    const asegu = new Aseg(req.body);
    // console.log(asegu);
    await asegu.save();
    // console.log(req.body);
    res.json({"status":"Asegurado guardado"});
});

router.put('/:id', async (req, res)=>{
   await Aseg.findByIdAndUpdate(req.params.id, req.body);
    res.json(
        {
            "status":"copiado"
    });
    
});

router.delete('/:id', async (req, res) => {

    await Aseg.findByIdAndRemove(req.params.id);
    res.json(
        {
            "status":"eliminado"
    });
});


module.exports = router;