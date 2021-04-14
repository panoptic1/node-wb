const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
//composition: Wrapping a function within an error-handling function in order to avoid cumbersome try/catch statements
const { catchErrors } = require('../handlers/errorHandlers');
router.get('/', storeController.homePage);
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));
module.exports = router;
