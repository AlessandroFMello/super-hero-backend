const router = require('express').Router();

const UniversesController = require('../controllers/universesController');
const universeValidationMiddleware = require('../middlewares/universeMiddleware');

const universesController = new UniversesController();

router.get('/', universesController.getAll);

router.get('/:id', universesController.getAllHeroesFromUniverse);

router.post(
  '/',
  universeValidationMiddleware,
  universesController.create,
);

router.put(
  '/:id',
  universeValidationMiddleware,
  universesController.update,
);

router.delete('/:id', universesController.delete);

module.exports = router;
