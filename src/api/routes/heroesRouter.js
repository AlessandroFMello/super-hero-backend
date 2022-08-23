const router = require('express').Router();

const HeroesController = require('../controllers/heroesController');
const heroValidationMiddleware = require('../middlewares/heroMiddleware');

const heroesController = new HeroesController();

router.get('/', heroesController.getAll);

router.get('/:id', heroesController.getById);

router.post(
  '/',
  heroValidationMiddleware,
  heroesController.create,
);

module.exports = router;
