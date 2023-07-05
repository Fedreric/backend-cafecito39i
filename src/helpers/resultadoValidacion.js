import { validationResult } from "express-validator";

const resultadoValidacion = (req, res, next) => {
    //trabajar ocn el resultado de validacion Express-validation
    const errors = validationResult(req);
    //errors.isEmpty() true: esta vacio false: tiene errores 
    if(!errors.isEmpty()){
      return res.status(400).json({
       errores: errors.array()
      })
    }

    next();
}

export default resultadoValidacion;