const UniversesService = require('../services/universesService');

class UniversesController {
  constructor() {
    this.universesService = new UniversesService();

    this.getAll = this.getAll.bind(this);
    this.getAllHeroesFromUniverse = this.getAllHeroesFromUniverse.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAll(_req, res) {
    const {
      code, allUniverses, message,
    } = await this.universesService.getAll();

    if (!allUniverses) {
      return res.status(code).json({ message });
    }

    return res.status(code).json(allUniverses);
  }

  async getAllHeroesFromUniverse(req, res) {
    const { id } = req.params;
    const {
      code, allHeroesFromUniverse, message,
    } = await this.universesService.getAllHeroesFromUniverse(id);

    if (!allHeroesFromUniverse) {
      return res.status(code).json({ message });
    }

    return res.status(code).json(allHeroesFromUniverse);
  }

  async create(req, res) {
    const { code, universe, message } = await this.universesService
      .create(req.body);

    if (!universe) {
      return res.status(code).json({ message });
    }

    return res.status(code).json(universe);
  }

  async update(req, res) {
    const { id } = req.params;

    const { code, universe, message } = await this.universesService.update(id, req.body);

    if (!universe) {
      return res.status(code).json({ message });
    }

    return res.status(code).json(universe);
  }

  async delete(req, res) {
    const { id } = req.params;

    const { code, message } = await this.universesService.delete(id);

    if (message) {
      return res.status(code).json({ message });
    }

    return res.status(code).end();
  }
}

module.exports = UniversesController;
