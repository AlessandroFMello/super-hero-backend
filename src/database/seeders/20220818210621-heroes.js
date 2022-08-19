module.exports = {
  up: async (queryInterface) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    await queryInterface.bulkInsert(
      'heroes',
      [
        {
          name: 'Batman',
          universe: 2,
          image: 'https://conteudo.imguol.com.br/c/entretenimento/04/2022/02/25/batman-1645790799911_v2_1x1.jpg',
        },
        {
          name: 'Superman',
          universe: 2,
          image: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2022/04/dc-superman.jpg',
        },
        {
          name: 'Flash',
          universe: 2,
          image: 'https://rollingstone.uol.com.br/media/uploads/ator_grant_gustin_em_the_flash_foto_reproducao_twitter_the_flash.png',
        },
        {
          name: 'Homem de Ferro',
          universe: 1,
          image: 'https://hqrock.files.wordpress.com/2013/03/iron_man_movie.jpg',
        },
        {
          name: 'Hulk',
          universe: 1,
          image: 'https://disneyplusbrasil.com.br/wp-content/uploads/2021/05/Hulk-Vingadores.jpg',
        },
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('heroes', null, {});
  },
};