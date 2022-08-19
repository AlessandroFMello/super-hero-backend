const HeroesService = require('../services/heroesService');

class HeroesController {
  constructor() {
    this.heroesService = new HeroesService();

    this.getAll = this.getAll.bind(this);
  }

  async getAll(_req, res) {
    const { code, allHeroes, message } = await this.heroesService.getAll();

    if (!allHeroes) {
      return res.status(code).json({ message });
    }

    return res.status(code).json(allHeroes);
  }
}

module.exports = HeroesController;
