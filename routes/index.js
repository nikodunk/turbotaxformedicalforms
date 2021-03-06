const express = require('express');
const router = express.Router();
const path = require('path');


// GET index.html static landing page. The "catchall" handler: for any request that doesn't
// match one above, send back static landing page.
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});




module.exports = router;