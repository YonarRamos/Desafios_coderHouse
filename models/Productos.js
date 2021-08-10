let db = [
    {
        title:"Lapiz",
        price: 35,
        thumbnail:'https://cdn2.iconfinder.com/data/icons/basic-flat-icon-set/128/pencil-256.png'
    },
    {
        title:"Calculadora",
        price: 50,
        thumbnail:'https://cdn3.iconfinder.com/data/icons/e-commerce-and-online-shopping/64/__Calculator-256.png'
    },
]

class Productos {
    constructor(){
    }
    show(){
        return db
    }
    showOne(id){
        let producto = db.filter((producto)=> producto.id == id)
        return  producto
    }
    add({title, price, thumbnail}){
        const newProducto = {
            id: db.length + 1,
            title,
            price,
            thumbnail,
        }
        db.push(newProducto)
        return newProducto
    }
    delete(id){
        let pr = db[id-1]
        db = db.filter((producto)=> producto.id != id)
        return  pr
    }
    edit(id, body){
        db[id-1] = body
        let actProd = db[id-1]
        actProd.id = id
        return  actProd
    }
}

export default Productos