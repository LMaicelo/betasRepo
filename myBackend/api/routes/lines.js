const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /lines'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling POST requests to /lines'
    });
});

router.get('/:lineName', (req, res, next) => {
    const name = req.params.lineName;
    if (name === 'thetaAlpha') {
        res.status(200).json({
            message: 'You discovered the Theta Alpha line!',
            name: name
        });
    } else {
        res.status(200).json({
            message: 'You passed a line name'
        });
    }
});

router.patch('/:lineName', (req, res, next) => {
    res.status(200).json({
        message: 'Updated line name!'
    });  
});

router.delete('/:lineName', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted line name!'
    });  
});

module.exports = router;