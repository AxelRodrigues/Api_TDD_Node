const{ Marcas } = require('../../src/app/models');

describe('Autentication', ()=> {
    it('Incerindo dados na tabela marcas ', async () => {
        const marcas = await Marcas.create({name: 'Ford'})
    
        console.log(marcas);

        expect(marcas.name).toBe('Ford')
    });
});
