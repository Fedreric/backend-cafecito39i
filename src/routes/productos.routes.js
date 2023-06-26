import { Router } from "express";
import { crearProducto, obtenerProductos } from "../controllers/productos.controllers";
const router = Router() 

// app.get('/prueba', (req, res)=>{
//     res.send('esto es una prueba de la solicitud get a mi backend');
// });

router.route('/productos').get(obtenerProductos).post(crearProducto)

export default router; 