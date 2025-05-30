/*
Campos
nombreCompleto,
correo,
contraseña,
edad,
pais
 */
  import {Schema} from "mongoose"
  import {model} from "mongoose"
  
  
  const ClientesSchema = new Schema({
        nombreCompleto: {
        type: String,
        required: true,
        
        },
        correo: {
        type: String,
        required: true,
        unique: true
        
        },
        contraseña: {
        type: String,
        required: true,
        
        },
        edad: {
        type: Number,
        required: true,
        min: 18
        },
        pais: {
        type: String,
        required: true
        }
        }, {
        timestamps: true,
        strict: false
        });
  
  export default model("Clientes", ClientesSchema);