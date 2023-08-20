const express = require('express');

const router = express.Router();

const {getBootcamps,createBootcamp,editBootcamp,updateBootcamp, getBootcamp,deleteBootcamp} = require('../controllers/bootcamp');


router.route('/').get(getBootcamps).post(createBootcamp);
router.route('/:id').get(editBootcamp).put(updateBootcamp);

router.route('/get/:id').get(getBootcamp);
router.route('/delete/:id').delete(deleteBootcamp);
module.exports = router;