import Usuario from "../models/usuario";
import bcrypt from "bcrypt"
export const login = async (req, res) => {
  try {
    //verificar si existe un mail como el recibido
    const { email, password } = req.body;

    //verificar si el email ya existe
    let usuario = await Usuario.findOne({ email }); //devulve un null
    if (!usuario) {
      //si el usuario no existe
      return res.status(400).json({
        mensaje: "Correo o password invalido - correo",
      });
    }
    // si no es valido el password
    const passwordValido = bcrypt.compareSync(password, usuario.password) // devuelve un booleano

    if (!passwordValido) {
      return res.status(400).json({
        mensaje: "Correo o password invalido - password",
      });
    }

    //responder que el usuario es correcto
    res.status(200).json({
      mensaje: "El usuario existe",
      uid: usuario._id,
      nombre: usuario.nombreUsuario,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "usuario o contraseña invalido",
    });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;
    //verificar si el email ya existe
    let usuario = await Usuario.findOne({ email }); //devulve un null
    console.log(usuario);
    if (usuario) {
      //si el usuario existe
      return res.status(400).json({
        mensaje: "ya existe un usuario con el correo enviado",
      });
    }
    //guardamos el nuevo usuario en la BD
    usuario = new Usuario(req.body);
    //Editar el usuario para encriptar el password
    const salt =  bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password, salt)
    //se guarda en la base de datos
    await usuario.save();
    res.status(201).json({
      mensaje: "usuario creado",
      nombre: usuario.nombre,
      uid: usuario._id,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "El usuario no pudo ser creado",
    });
  }
};

export const listarUsuarios = async (req, res) => {
  // res.send("esto es una prueba de una peticion get");
  try {
    //buscar en la BD la collection de productos
    const usuarios = await Usuario.find();
    //envio la respuesta al frontend
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los usuarios",
    });
  }
};