/* eslint-disable no-undef */
const { expect } = require('chai');
const HeroesService = require('../../../api/services/heroesService');

const newHeroMock = {
  name: 'Lanterna-Verde',
  universeId: 2,
  imageUrl: 'https://nishiweb.com.br/animecomics/images/upload/108.jpg',
};

describe('Testa HeroesService', () => {
  const heroesService = new HeroesService();

  describe('create()', () => {
    it('Testa se é retornado um objeto', async () => {
      const heroCreated = await heroesService.create(newHeroMock);

      expect(heroCreated).to.be.an('object');
    });

    it('Testa se se o objeto contém todas as propriedades', async () => {
      const heroCreated = await heroesService.create(newHeroMock);

      expect(heroCreated).to.have.property('code');
    });
  });

  describe('read()', () => {
    it('Testa se é retornado um array', async () => {
      const { allHeroes } = await heroesService.getAll();

      const allHeroesArray = Object.values(allHeroes);

      expect(allHeroesArray).to.be.an('array');
    });

    it('Testa se todos itens do array são objetos', async () => {
      const { allHeroes } = await heroesService.getAll();
      const allHeroesArray = Object.values(allHeroes);

      allHeroesArray.forEach((hero) => {
        expect(hero).to.be.an('object');
      });
    });

    it('Testa se todos itens do array contém todas as propriedades', async () => {
      const { allHeroes } = await heroesService.getAll();
      const allHeroesArray = Object.values(allHeroes);

      allHeroesArray.forEach((hero) => {
        expect(hero).to.have.property('id');
        expect(hero).to.have.property('name');
        expect(hero).to.have.property('universe');
        expect(hero).to.have.property('image');
      });
    });
  });

  describe('readOne()', () => {
    it('Testa se é retornado um objeto', async () => {
      const { hero } = await heroesService.getById(5);

      expect(hero).to.be.an('object');
    });

    it('Testa se o objeto contém todas as propriedades', async () => {
      const { hero } = await heroesService.getById(5);

      expect(hero).to.have.property('id');
      expect(hero).to.have.property('name');
      expect(hero).to.have.property('universe');
      expect(hero).to.have.property('image');
    });
  });

  describe('update()', () => {
    const heroUpdate = {
      name: 'Lanterna Verde',
      universeId: 2,
      imageUrl: 'https://nishiweb.com.br/animecomics/images/upload/108.jpg',
    };
    it('Testa se o valor é atualizado', async () => {
      const hero = await heroesService.update(6, heroUpdate);

      expect(hero.code).to.be.equal(200);
    });
  });

  describe('delete()', () => {
    it('Testa se é deletado corretamente', async () => {
      const deletedHero = await heroesService.delete(6);

      expect(deletedHero.code).to.be.equal(200);
    });
  });
});
