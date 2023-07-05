import { Schema, model } from "mongoose";

const productoSchema = new Schema({
    nombreProducto: {
        type: String,
        minLength: 2,
        maxLength:40,
        unique: true,
        required: true
    },
    precio:{
        type:Number,
        min:10,
        max:20000,
        required:true
    },
    imagen:{
        type: String,
        required:true
    },
    categoria:{
        type: String,
        required:true
    },
    descripcion: {
        type: String,
        minLength: 10,
        maxLength:400,
        required: true
    }
})

const Producto = model('producto', productoSchema)

export default Producto;