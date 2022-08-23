const { Hero } = require('../../database/models');
const { Universe } = require('../../database/models');

class UniversesService {
  constructor() {
    this.heroModel = Hero;

    this.NOT_FOUND = 'Universe not found';

    this.getAll = this.getAll.bind(this);
    this.getAllHeroesFromUniverse = this.getAllHeroesFromUniverse.bind(this);
  }

  async getAll() {
    const findAllUniverses = await Universe.findAll();

    if (!findAllUniverses) return { code: 404, message: this.NOT_FOUND };

    return { code: 200, allUniverses: findAllUniverses };
  }

  async getAllHeroesFromUniverse(selectedUniverseId) {
    const findAllHeroes = await Universe.findOne({
      where: { id: selectedUniverseId },
      include: { model: Hero, as: 'heroUniverse' },
    });

    if (!findAllHeroes) return { code: 404, message: this.NOT_FOUND };

    return { code: 200, allHeroesFromUniverse: findAllHeroes };
  }
}

module.exports = UniversesService;
