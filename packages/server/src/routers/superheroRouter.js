const express = require('express');
const controller = require('../controllers/superheroController.js');
const imageUpload = require('../middleware/imageUpload')
const router = express.Router();
//const { upload } = require('./../middleware');
router.post(
  '/createSuperhero',
  imageUpload.array('superheroImages[]'),
  controller.createSuperhero
)

router.get(
  '/getSuperheroes',
  controller.getSuperheroes
)

router.get(
  '/getSuperheroById',
  controller.getSuperheroById
)

router.put(
  '/updateSuperhero',
  imageUpload.array('superheroNewImages[]'),
  controller.updateSuperhero
)

router.delete(
  '/deleteSuperhero',
  controller.deleteSuperhero
)

/*router.post(
  '/addSuperheroImages',
  imageUpload.array('superheroImages[]'),
  //controller.updateSuperhero
)*/

module.exports = router;