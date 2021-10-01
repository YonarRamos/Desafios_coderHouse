import faker from 'faker';

class productosFaker {
    constructor() {
        this.data = []
    }

    findIndex(id) {
        return this.data.findIndex(aResource => aResource.id == id);
    }

    get(cant) {
        this.data = [];

        for (let i = 0; i < cant; i++) {
            this.data.push({
                author:{
                    id: faker.internet.email(),
                    nombre : faker.name.firstName(),
                    nombre : faker.name.lastName(),
                    edad: faker.datatype.number(),
                    alias: faker.internet.userName(),
                    avatar: faker.internet.avatar()   
                },
                message:{
                   text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                   timestamp: faker.date.recent(),
                }
            })
        }
        return this.data;
    }

    post() {
        this.data.push({
            author:{
                id: faker.internet.email(),
                nombre : faker.name.firstName(),
                nombre : faker.name.lastName(),
                edad: faker.datatype.number(),
                alias: faker.internet.userName(),
                avatar: faker.internet.avatar()   
            },
            message:{
               text:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
               timestamp: faker.date.recent(),
            }
        })
    }

    put(id, data) {
        const index = this.findIndex(id);
        const recursoViejo = this.data[index];
        const recursoNuevo = { id, ...data };

        const recursoActualizado = { ...recursoViejo, ...recursoNuevo };
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#syntax
        this.data.splice(index, 1, recursoActualizado);
    }

    delete(id){
        const index = this.findIndex(id);
        this.data.splice(index, 1);
    }
}
const fakeProducts = new productosFaker();
module.exports =  fakeProducts;