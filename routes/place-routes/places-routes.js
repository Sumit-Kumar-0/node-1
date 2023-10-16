const express = require('express');
const placesControllers = require('../../controllers/place-controllers/places-controllers');
const router = express.Router();


router.get('/:pid', placesControllers.getPlaceByPlaceId);

router.get('/user/:cid', placesControllers.getPlaceByCreatorId);

router.post('/', placesControllers.createPlace);

module.exports = router;
