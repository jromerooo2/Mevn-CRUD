const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('LOGIN LOGIC GOES HERE');
})


module.exports = router;