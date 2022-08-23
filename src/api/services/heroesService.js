const { Hero } = require('../../database/models');
const { Universe } = require('../../database/models');

class HeroesService {
  constructor() {
    this.heroModel = Hero;

    this.NOT_FOUND = 'Hero not found';
    this.ALREADY_EXIST = 'Hero already exists';

    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
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

  async create(heroData) {
    const getHeroByName = await this.heroModel.findOne({
      where: { name: heroData.name },
    });

    if (getHeroByName) {
      return { code: 404, message: this.ALREADY_EXIST };
    }

    const newHero = {
      name: heroData.name,
      universe: heroData.universeId,
      image: heroData.imageUrl,
    };

    const hero = await this.heroModel.create(newHero);

    if (!hero) return { code: 400, message: 'Something went wrong, hero not created' };

    return { code: 201, hero: hero.dataValues };
  }

  async update(id, heroData) {
    const findHero = await this.heroModel.findOne({ where: { id } });

    if (!findHero) return { code: 404, message: this.NOT_FOUND };

    const updatedHero = {
      name: heroData.name,
      universe: heroData.universeId,
      image: heroData.imageUrl,
    };

    const hero = await this.heroModel.update(updatedHero, { where: { id } });

    if (!hero) return { code: 401, message: 'Hero not updated' };

    return { code: 200, hero };
  }

}

module.exports = HeroesService;
