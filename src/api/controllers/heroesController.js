const HeroesService = require('../services/heroesService');

class HeroesController {
  constructor() {
    this.heroesService = new HeroesService();

    this.getAll = this.getAll.bind(this);
    this.getById = this.getById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(_req, res) {
    const { code, allHeroes, message } = await this.heroesService.getAll();

    if (!allHeroes) {
      return res.status(code).json({ message });
    }

    return res.status(code).json(allHeroes);
  }

  async getById(req, res) {
    const { id } = req.params;

    const { code, hero, message } = await this.heroesService.getById(id);

    if (!hero) {
      return res.status(code).json({ message });
    }

    return res.status(code).json(hero);
  }

  async create(req, res) {
    const { code, hero, message } = await this.heroesService
      .create(req.body);

    if (!hero) {
      return res.status(code).json({ message });
    }

    return res.status(code).json(hero);
  }

  async update(req, res) {
    const { id } = req.params;

    const { code, hero, message } = await this.heroesService.update(id, req.body);

    if (!hero) {
      return res.status(code).json({ message });
    }

    return res.status(code).json(hero);
  }

  async delete(req, res) {
    const { id } = req.params;

    const { code, message } = await this.heroesService.delete(id);

    if (message) {
      return res.status(code).json({ message });
    }

    return res.status(code).end();
  }
}

module.exports = HeroesController;
