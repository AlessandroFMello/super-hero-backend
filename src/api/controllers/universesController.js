const UniversesService = require('../services/universesService');

class UniversesController {
  constructor() {
    this.universesService = new UniversesService();

    this.getAll = this.getAll.bind(this);
    this.getAllHeroesFromUniverse = this.getAllHeroesFromUniverse.bind(this);
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
}

module.exports = UniversesController;
