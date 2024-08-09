const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("This is Route");
});

// Corrected the route definition for POST
router.get('/test/:id', (req, res) => {
    res.send(`This is Route with ID: ${req.params.id}`);
});

module.exports = router;


