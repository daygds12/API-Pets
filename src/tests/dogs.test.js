
const request = require('supertest')
//teste requisicao
test('/pets/dogs', async()=>{
     
    await request('http://localhost:3030')
    .get('/pets/dogs')
    //retorno teste
    .expect(200)
    .then((res) => console.log('Passou no teste'))
})

//testar npm run test

test('/pets/dogs/newDog', async()=>{
    await request('http://localhost:3030')
    .get('/pets/dogs/newDog')
    .send({
        "ID": 101,
        "RACA": "beagle",
        "FOTO": "https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg",
       "IDADE": "3",
       "NOME": "Sonia",
    "GENERO": "Female",
    "RUA": "Rua campo de piratininga",
    "NUMERO": "299",
    "CIDADE": "São Bernardo",
    "ESTADO": "São Paulo",
    "TELEFONE": "(11) 4002-8922"

    })
    //retorno teste
    .expect(200)
    .then((res) => console.log('Passou no teste'))
})
