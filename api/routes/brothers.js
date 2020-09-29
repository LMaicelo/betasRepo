const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /brothers'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /brothers'
    });
});

router.get('/:brotherName', (req, res, next) => {
    const name = req.params.brotherName;
    if (name === 'special') {
        res.status(200).json({
            message: 'You discovered the special name',
            name: name
        });
    } else {
        res.status(200).json({
            message: 'You passed a name'
        });
    }
});

router.patch('/:brotherName', (req, res, next) => {
    res.status(200).json({
        message: 'Updated name!'
    });  
});

router.delete('/:brotherName', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted name!'
    });  
});

module.exports = router;