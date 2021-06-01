const express = require('express');
const router = express.Router();
const Aseg = require('../models/asegurados.js');
const User = require('../models/usuario.js');

router.get('/get-asegurados', async (req, res) => {
    //  res.send('LOGIN LOGIC GOES HERE');
    const asegu = await Aseg.find();
    console.log(asegu);
    res.json(asegu);
});


router.post('/guardar', async (req, res) => {
    const asegu = new Aseg(req.body);
    // console.log(asegu);
    await asegu.save();
    // console.log(req.body);
    res.json({"status":"Asegurado guardado"});
});

router.post('/create-user', async (req, res) => {
    const usuario = new User(req.body);
    // console.log(asegu);
    await usuario.save();
    console.log(req.body);
    res.json({"status":"Usuario guardado"});
});


router.post('/login', function (req, res) {
    // res.send('is this your message? ');
    const usuario =  User.find({usuario: 'Juan', contra: 'Juan'}, function(err, user) 
    {
       if (err)
       {
           res.send(err);
       }
       console.log(user);
       res.json(user);
   
    });

});


router.put('/update/:userId', async (req, res)=>{
   await Aseg.findByIdAndUpdate(req.params.userId, req.body);
    res.json(
        {
            "status":"copiado"
    });
    
});

router.delete('/delete/:userId', async (req, res) => {

    await Aseg.findByIdAndRemove(req.params.userId);
    res.json(
        {
            "status":"eliminado"

    });
});


module.exports = router;