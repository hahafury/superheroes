const express = require('express');
const controller = require('../controllers/superheroController.js');
const imageUpload = require('../middleware/imageUpload')
const router = express.Router();
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

module.exports = router;