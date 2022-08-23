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
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll() {
    const findAllUniverses = await this.universeModel.findAll();

    if (!findAllUniverses) return { code: 404, message: this.NOT_FOUND };

    return { code: 200, allUniverses: findAllUniverses };
  }

  async getAllHeroesFromUniverse(selectedUniverseId) {
    const findAllHeroes = await this.universeModel.findOne({
      where: { id: selectedUniverseId },
      include: { model: Hero, as: 'universeHeroes' },
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

  async update(id, universeData) {
    const findUniverse = await this.universeModel.findOne({ where: { id } });

    if (!findUniverse) return { code: 404, message: this.NOT_FOUND };

    const updatedUniverse = {
      universe: universeData.universe,
    };

    const universe = await this.universeModel.update(updatedUniverse, { where: { id } });

    if (!universe) return { code: 401, message: 'Universe not updated' };

    return { code: 200, universe };
  }

  async delete(id) {
    const findHero = await this.universeModel.findOne({ where: { id } });

    if (!findHero) return { code: 404, message: this.NOT_FOUND };

    const hero = await this.universeModel.destroy({ where: { id } });

    if (!hero) return { code: 401, message: 'Universe not deleted' };

    return { code: 200 };
  }
}

module.exports = UniversesService;
