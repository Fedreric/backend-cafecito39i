import Producto from "../models/producto"

//Read de productos
export const obtenerProductos = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos)
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar los productos'
        })
    }
}

//create productos

export const crearProducto = async (req, res) => {
    try {
        const productoNuevo = new Producto(req.body)
        await productoNuevo.save()
        res.status(201).json({
            mensaje:'El producto fue creado conrrectamente!'
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al crear el producto'
        })
    }
}

export const borrarProducto = async (req, res) =>{
    try {
        //obtener el id y luego borrar
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'Producto eliminado con exito'
        });
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: 'Error al eliminar el producto'
        });
    }
}

export const editarProducto = async (req,res)=> {
    try {
        // Extraer el id del request y el body
        await Producto.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: 'Producto editado correctamente'
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: 'No se pudo editar el producto'
        });
    }
}