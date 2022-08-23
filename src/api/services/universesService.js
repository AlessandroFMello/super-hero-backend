const { Hero } = require('../../database/models');
const { Universe } = require('../../database/models');

class UniversesService {
  constructor() {
    this.universeModel = Universe;

    this.NOT_FOUND = 'Universe not found';
    this.ALREADY_EXIST = 'Universe already exists';

    this.getAll = this.getAll.bind(this);
    this.getAllHeroesFromUniverse = this.getAllHeroesFromUniverse.bind(this);
    this.create = this.create.bind(this);
  }

  async getAll() {
    const findAllUniverses = await this.universeModel.findAll();

    if (!findAllUniverses) return { code: 404, message: this.NOT_FOUND };

    return { code: 200, allUniverses: findAllUniverses };
  }

  async getAllHeroesFromUniverse(selectedUniverseId) {
    const findAllHeroes = await this.universeModel.findOne({
      where: { id: selectedUniverseId },
      include: { model: Hero, as: 'heroUniverse' },
    });

    if (!findAllHeroes) return { code: 404, message: this.NOT_FOUND };

    return { code: 200, allHeroesFromUniverse: findAllHeroes };
  }

  async create(universeData) {
    const getUniverseByName = await this.universeModel.findOne({
      where: { universe: universeData.universe },
    });

    if (getUniverseByName) {
      return { code: 400, message: this.ALREADY_EXIST };
    }

    const newUniverse = {
      universe: universeData.universe,
    };

    const universe = await this.universeModel.create(newUniverse);

    if (!universe) return { code: 400, message: 'Something went wrong, universe not created' };

    return { code: 201, universe: universe.dataValues };
  }

}

module.exports = UniversesService;
