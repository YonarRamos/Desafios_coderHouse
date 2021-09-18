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
                id: this.data.length + 1,
                name : faker.commerce.productName(),
                price: `$${faker.commerce.price()}`,
                thumbnail: faker.image.image()           
            })
        }
        return this.data;
    }

    post() {
        this.data.push({
            id: this.data.length + 1,
            nombre: faker.name.firstName(),
            email: faker.internet.email(),
            website: faker.internet.url(),
            image: faker.image.avatar(),
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

export const fakeProducts = new productosFaker();