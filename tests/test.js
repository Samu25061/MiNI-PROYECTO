const { clearItems } = require('../src/items');

beforeEach(() => {
    clearItems();
});

const request = require('supertest');
const app = require('../src/app');

describe('API /items', () => {

    test('GET /items debe retornar arreglo vacío', async () => {
        const res = await request(app).get('/items');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([]);
    });

    test('POST /items debe agregar item', async () => {
        const res = await request(app)
            .post('/items')
            .send({ nombre: 'Samuel' });

        expect(res.statusCode).toBe(200);
    });

});
 test('GET después de POST debe traer datos', async () => {
    await request(app).post('/items').send({ nombre: 'Test' });
    const res = await request(app).get('/items');
    expect(res.body.length).toBe(1);
});

test('PUT debe actualizar item', async () => {
    await request(app).post('/items').send({ nombre: 'A' });

    const res = await request(app)
        .put('/items/0')
        .send({ nombre: 'B' });

    expect(res.statusCode).toBe(200);
});

test('DELETE debe eliminar item', async () => {
    await request(app).post('/items').send({ nombre: 'A' });

    const res = await request(app).delete('/items/0');

    expect(res.statusCode).toBe(200);
});