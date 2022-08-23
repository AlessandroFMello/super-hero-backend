const chai = require("chai");
const chaiHttp = require('chai-http')
const App = require('../../../api/app')

chai.use(chaiHttp);

const { expect } = chai;

describe('CONTROLLER LAYER', () => {
  const server = new App();
  const app = server.getApp();

	describe('Testa UniversesController', () => {
		describe('create()', () => {
			it('Testa se a requisição POST para a rota /universes retorna status 201', async ()=> {
				const response = await chai.request(app)
				.post('/universes')
				.send({ universe: "Disney" })
	
				expect(response.status).to.be.equal(201);
			});
	
			it('Testa se a requisição retorna um objeto', async ()=> {
				const response = await chai.request(app)
				.post('/universes')
				.send({ universe: "Disney2" })
		
				expect(response.body).to.be.an('object');
			});
	
			it('Testa o objeto tem as propriedades devidas', async ()=> {
				const response = await chai.request(app)
				.post('/universes')
				.send({ universe: "Disney3" })
	
				const newUniverse = response.body;
        
				expect(newUniverse).to.have.property('id');
				expect(newUniverse).to.have.property('universe');
			});
		})

		describe('read()', () => {
			it('Testa se a requisição GET para a rota /universes retorna status 200', async ()=> {
				const response = await chai.request(app)
				.get('/universes')
	
				expect(response.status).to.be.equal(200);
			});
	
			it('Testa se a requisição retorna um array', async ()=> {
				const response = await chai.request(app)
				.get('/universes')
		
				expect(response.body).to.be.an('array');
			});
	
			it('Testa se cada tem do array é um objeto', async ()=> {
				const response = await chai.request(app)
				.get('/universes')
	
				const allUniverses = response.body;
	
				allUniverses.forEach((universe) => {
					expect(universe).to.be.an('object');
				});
			});
	
			it('Testa se cada objeto tem as propriedades devidas', async ()=> {
				const response = await chai.request(app)
				.get('/universes')
	
				const allUniverses = response.body;
	
				allUniverses.forEach((universe) => {
          expect(universe).to.have.property('id');
          expect(universe).to.have.property('universe');
				});
			});
		})
	
		describe('readOne()', () => {
			describe('SUCESSO', () => {
				it('Testa se a requisição GET para a rota /universes/:id retorna status 200',  async ()=> {
					const response = await chai.request(app)
						.get(`/universes/1`)
					
					expect(response.status).to.be.equal(200);
				});
		
				it('Testa se a requisição retorna um objeto', async ()=> {
					const response = await chai.request(app)
					.get(`/universes/1`)
			
					expect(response.body).to.be.an('object');
				});
		
				it('Testa o objeto tem as propriedades devidas', async ()=> {
					const response = await chai.request(app)
					.get(`/universes/1`)
		
		
          expect(response.body).to.have.property('id');
          expect(response.body).to.have.property('universe');
				});
			})
			describe('FALHA', () => {
				it('Testa se a requisição retorna erro 404 caso o id não seja encontrado', async ()=> {
					const response = await chai.request(app)
					.get(`/universes/1111111b111111f1114111f1`)
					
					expect(response.body.message).to.be
					.equal("Universe not found");
				});
			})
		})

		describe('update()', () => {
      const updateHero = { universe: "mudou" }
			describe('SUCESSO', () => {
				it('Testa se a requisição PUT para a rota /universes/:id retorna status 200',  async ()=> {
					const response = await chai.request(app)
						.put(`/universes/1`)
						.send(updateHero);
					
					expect(response.status).to.be.equal(200);
				});
			})
			describe('FALHA', () => {
				it('Testa se a requisição retorna erro 404 caso o id não seja encontrado', async ()=> {
					const response = await chai.request(app)
					.put(`/universes/1111111b111111f1114111f1`)
					.send(updateHero);
					
					expect(response.body.message).to.be
					.equal("Universe not found");
				});
			})
		})
	
		describe('delete()', () => {
			describe('SUCESSO', () => {
				it('Testa se a requisição DELETE para a rota /universes/:id retorna status 200',  async ()=> {
					const response = await chai.request(app)
						.delete(`/universes/1`)
					
					expect(response.status).to.be.equal(200);
				});
			})
	
			describe('FALHA', () => {
				it('Testa se a requisição retorna erro 404 caso o id não seja encontrado', async ()=> {
					const response = await chai.request(app)
					.delete(`/universes/1111111b111111f1114111f1`)
					
					expect(response.body.message).to.be
					.equal("Universe not found");
				});
			})
		})
	});
});