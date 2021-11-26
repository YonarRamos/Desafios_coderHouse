import supertest from 'supertest';
import mongoose from 'mongoose';
import  MongoDB  from '../services/db';
import ExpressServer from '../services/server';
import { Productos } from "../models/productos";
import { expect } from 'chai';

describe('Ejemplos de tests', () => {
  let newMongo = null;
  let request = null;

  beforeAll(() => {
    jest
      .spyOn(MongoDB, 'init')
      .mockImplementationOnce(() => '123');

    newMongo = MongoDB.init();
    request = supertest(ExpressServer);
  });

  afterAll(async () => {
    await MongoDB.disconnect();
  });

  test('deberia devolver coneccion a mongo falsa', async () => {
    const connection = newMongo;
    expect(connection).to.equal('123');
  });

  test('Deberia recibir un array vacio si no existen usuarios', async () => {
    const mockData = [];

    jest
      .spyOn(Productos, 'find')
      .mockImplementationOnce(() => Promise.resolve(mockData));

    const expectedResponse = {
      data: mockData,
    };
    const response = await request.get('/productos/');
    expect(response.body).to.deep.equal(expectedResponse);
  });

 test('Deberia recibir un array con un usuario si mongoose me devuele un usuario', async () => {
    const mockData = [
            {
                "_id": "619ba9c0ec75cff55cfc9c50",
                "timestamp": "2021-11-22T14:30:56.000Z",
                "codigo": "1637591456790",
                "name": "Lapicera",
                "price": 15,
                "stock": 140,
                "description": "lorem ipsum pen",
                "thumbnail": "https://cdn4.iconfinder.com/data/icons/back-to-school-151/64/pencil-color-artist-art-draw-256.png",
                "__v": 0
            }
        ];
    

    jest
      .spyOn(Productos, 'find')
      .mockImplementationOnce(() => Promise.resolve(mockData));

    const expectedResponse = {
      data: mockData,
    };
    const response = await request.get('/productos?id=619ba9c0ec75cff55cfc9c50');
    expect(response.body).to.deep.equal(expectedResponse);
  });

    test('deberia crear un usuario correctamente', async () => {
    //jest.spyOn(Productos.prototype, 'save').mockResolvedValueOnce('ok');
    const body = {
        "name": "papel",
        "price": 5,
        "stock": 1200,
        "description": "lorem ipsum page",
        "thumbnail": "https://cdn0.iconfinder.com/data/icons/b/64/data_paper_contract-256.png"
    };
    const response = await request.post('/productos/').send(body);

    expect(response.status).to.eql(200);

    const producto = response.body.data[0];
    expect(producto).to.include.keys('name', 'price');

    expect(producto.name).to.equal(body.name);
    expect(producto.price).to.equal(body.price);
  });

 test('deberia recibir un error 400 al querer crear un producto y mandar mal el body', async () => {
    const body = {};
    const response = await request.post('/productos/').send(body);
    expect(response.status).to.eql(400);

    const expectedBody = {
      msg: 'missing Body fields',
    };

    expect(response.body).to.deep.equal(expectedBody);
  });
});