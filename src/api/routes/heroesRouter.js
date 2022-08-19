const router = require('express').Router();

const HeroesController = require('../controllers/heroesController');

const heroesController = new HeroesController();

router.get('/', heroesController.getAll);

module.exports = router;
