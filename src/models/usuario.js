import mongoose, {Schema} from "mongoose";

const usuario = new Schema({
    nombreUsuario:{
        type: String,
        maxlength: 30,
        required: true,
        unique:true
    },
    email:{
        type: String,
        maxlength: 200,
        unique:true,
        required:true
    },
    password:{
        type: String,
        required:true
    }
});

const Usuario = mongoose.model('usuario', usuario);

export default Usuario;