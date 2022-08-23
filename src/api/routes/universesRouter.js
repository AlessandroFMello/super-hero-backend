const router = require('express').Router();

const UniversesController = require('../controllers/universesController');

const universesController = new UniversesController();

router.get('/', universesController.getAll);

router.get('/:id', universesController.getAllHeroesFromUniverse);

router.post(
  '/',
  universeValidationMiddleware,
  universesController.create,
);

module.exports = router;
