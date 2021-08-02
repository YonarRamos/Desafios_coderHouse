const db = []
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

}

export default Productos