const { Hero } = require('../../database/models');
const { Universe } = require('../../database/models');

class HeroesService {
  constructor() {
    this.heroModel = Hero;

    this.NOT_FOUND = 'Hero not found';

    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
  }

  async getAll() {
    const findAllHeroes = await this.heroModel.findAll({
      include: { model: Universe, as: 'heroUniverse' },
    });

    if (!findAllHeroes) return { code: 404, message: this.NOT_FOUND };

    return { code: 200, allHeroes: findAllHeroes };
  }

  async getById(id) {
    const findHeroById = await this.heroModel.findOne({
      where: { id },
      include: { model: Universe, as: 'heroUniverse' },
    });

    if (!findHeroById) return { code: 404, message: this.NOT_FOUND };

    return { code: 200, hero: findHeroById };
  }

}

module.exports = HeroesService;
