const { expect } = require("chai");
const UniversesService = require("../../../api/services/universesService");

const newUniverseMock = {
	universe: "Disney",
}

describe('Testa UniversesService', () => {
  let universesService = new UniversesService();

  describe('create()', () => {
    it('Testa se é retornado um objeto', async () => {
      const universeCreated = await universesService.create(newUniverseMock);

      expect(universeCreated).to.be.an('object');
    })

    it('Testa se se o objeto contém todas as propriedades', async () => {
      const universeCreated = await universesService.create(newUniverseMock);

      expect(universeCreated).to.have.property('code');
    })
  });

  describe('read()', () => {
    it('Testa se é retornado um array', async () => {
      const { allUniverses } = await universesService.getAll();

      const allUniversesArray = Object.values(allUniverses);

      expect(allUniversesArray).to.be.an('array');
    })

    it('Testa se todos itens do array são objetos', async () => {
      const { allUniverses } = await universesService.getAll();
      const allUniversesArray = Object.values(allUniverses);

      allUniversesArray.forEach((universe) => {

        expect(universe).to.be.an('object');
      });
    })

    it('Testa se todos itens do array contém todas as propriedades', async () => {
      const { allUniverses } = await universesService.getAll();
      const allUniversesArray = Object.values(allUniverses);
      

      allUniversesArray.forEach((universe) => {

        expect(universe).to.have.property('id');
        expect(universe).to.have.property('universe');
      });
    });
  });

  describe('readOne()', () => {
    it('Testa se o código de status esta correto', async () => {
      const { code } = await universesService.getAllHeroesFromUniverse(1);

      expect(code).to.be.equal(200);
    })

    it('Testa se é retornado um objeto', async () => {
      const { allHeroesFromUniverse } = await universesService.getAllHeroesFromUniverse(1);

      expect(allHeroesFromUniverse.dataValues).to.be.an('object');
    })
  });

  describe('update()', () => {
    const universeUpdate = {
      universe: "Dysnei",
    }
    it('Testa se o valor é atualizado', async () => {
      const universe = await universesService.update(3, universeUpdate);

      expect(universe.code).to.be.equal(200);
    })
  });

  describe('delete()', () => {
    it('Testa se é deletado corretamente', async () => {
      const deletedUniverse = await universesService.delete(3);

      expect(deletedUniverse.code).to.be.equal(200);
    })
  });
});