const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});

module.exports = router;