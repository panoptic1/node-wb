const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
//composition: Wrapping a function within an error-handling function in order to avoid cumbersome try/catch statements
const { catchErrors } = require('../handlers/errorHandlers');
// router.get('/', storeController.homePage);
//now that we can query the database, this^^ line of code becomes...
router.get('/', catchErrors(storeController.getStores));
router.get('/stores', catchErrors(storeController.getStores));
router.get('/add', storeController.addStore);
router.post('/add', catchErrors(storeController.createStore));
router.get('stores/:id/edit', catchErrors(storeController.editStore));
module.exports = router;
