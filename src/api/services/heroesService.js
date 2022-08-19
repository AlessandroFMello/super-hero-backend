const { Hero } = require('../../database/models');
const { Universe } = require('../../database/models');

class HeroesService {
  constructor() {
    this.heroModel = Hero;

    this.NOT_FOUND = 'Product not found';

    this.getAll = this.getAll.bind(this);
  }

  async getAll() {
    const findAllHeroes = await Hero.findAll({
      include: { model: Universe, as: 'heroUniverse' },
    });

    if (!findAllHeroes) return { code: 404, message: this.NOT_FOUND };

    return { code: 200, allHeroes: findAllHeroes };
  }
}

module.exports = HeroesService;
