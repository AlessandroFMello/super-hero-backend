/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const App = require('../../../api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('CONTROLLER LAYER', () => {
  const server = new App();
  const app = server.getApp();

  describe('Testa HeroesController', () => {
    describe('create()', () => {
      it('Testa se a requisição POST para a rota /heroes retorna status 201', async () => {
        const response = await chai.request(app)
          .post('/heroes')
          .send({
            name: 'fake1',
            universeId: 2,
            imageUrl: 'fake1',
          });

        expect(response.status).to.be.equal(201);
      });

      it('Testa se a requisição retorna um objeto', async () => {
        const response = await chai.request(app)
          .post('/heroes')
          .send({
            name: 'fake2',
            universeId: 2,
            imageUrl: 'fake2',
          });

        expect(response.body).to.be.an('object');
      });

      it('Testa o objeto tem as propriedades devidas', async () => {
        const response = await chai.request(app)
          .post('/heroes')
          .send({
            name: 'fake3',
            universeId: 2,
            imageUrl: 'fake3',
          });

        const newHero = response.body;

        expect(newHero).to.have.property('id');
        expect(newHero).to.have.property('name');
        expect(newHero).to.have.property('universe');
        expect(newHero).to.have.property('image');
      });
    });

    describe('read()', () => {
      it('Testa se a requisição GET para a rota /heroes retorna status 200', async () => {
        const response = await chai.request(app)
          .get('/heroes');

        expect(response.status).to.be.equal(200);
      });

      it('Testa se a requisição retorna um array', async () => {
        const response = await chai.request(app)
          .get('/heroes');

        expect(response.body).to.be.an('array');
      });

      it('Testa se cada tem do array é um objeto', async () => {
        const response = await chai.request(app)
          .get('/heroes');

        const allheroes = response.body;

        allheroes.forEach((hero) => {
          expect(hero).to.be.an('object');
        });
      });

      it('Testa se cada objeto tem as propriedades devidas', async () => {
        const response = await chai.request(app)
          .get('/heroes');

        const allheroes = response.body;

        allheroes.forEach((hero) => {
          expect(hero).to.have.property('id');
          expect(hero).to.have.property('name');
          expect(hero).to.have.property('universe');
          expect(hero).to.have.property('image');
        });
      });
    });

    describe('readOne()', () => {
      describe('SUCESSO', () => {
        it('Testa se a requisição GET para a rota /heroes/:id retorna status 200', async () => {
          const response = await chai.request(app)
            .get('/heroes/1');

          expect(response.status).to.be.equal(200);
        });

        it('Testa se a requisição retorna um objeto', async () => {
          const response = await chai.request(app)
            .get('/heroes/1');

          expect(response.body).to.be.an('object');
        });

        it('Testa o objeto tem as propriedades devidas', async () => {
          const response = await chai.request(app)
            .get('/heroes/1');

          expect(response.body).to.have.property('id');
          expect(response.body).to.have.property('name');
          expect(response.body).to.have.property('universe');
          expect(response.body).to.have.property('image');
        });
      });
      describe('FALHA', () => {
        it('Testa se a requisição retorna erro 404 caso o id não seja encontrado', async () => {
          const response = await chai.request(app)
            .get('/heroes/1111111b111111f1114111f1');

          expect(response.body.message).to.be
            .equal('Hero not found');
        });
      });
    });

    describe('update()', () => {
      const updateHero = {
        name: 'mudou',
        universeId: 2,
        imageUrl: 'fake2',
      };
      describe('SUCESSO', () => {
        it('Testa se a requisição PUT para a rota /heroes/:id retorna status 200', async () => {
          const response = await chai.request(app)
            .put('/heroes/6')
            .send(updateHero);

          expect(response.status).to.be.equal(200);
        });
      });
      describe('FALHA', () => {
        it('Testa se a requisição retorna erro 404 caso o id não seja encontrado', async () => {
          const response = await chai.request(app)
            .put('/heroes/1111111b111111f1114111f1')
            .send(updateHero);

          expect(response.body.message).to.be
            .equal('Hero not found');
        });
      });
    });

    describe('delete()', () => {
      describe('SUCESSO', () => {
        it('Testa se a requisição DELETE para a rota /heroes/:id retorna status 200', async () => {
          const response = await chai.request(app)
            .delete('/heroes/1');

          expect(response.status).to.be.equal(200);
        });
      });

      describe('FALHA', () => {
        it('Testa se a requisição retorna erro 404 caso o id não seja encontrado', async () => {
          const response = await chai.request(app)
            .delete('/heroes/1111111b111111f1114111f1');

          expect(response.body.message).to.be
            .equal('Hero not found');
        });
      });
    });
  });
});
