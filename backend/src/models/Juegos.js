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


const JuegosSchema = new Schema({
        nombre: {
        type: String,
        required: true,
        trim: true
        },
        categoria: {
        type: String,
        required: true,
        enum: ['Mesa', 'Electrónico', 'Lotería', 'Otro'],
        default: 'Otro'
        },
        apuestaMinima: {
        type: Number,
        required: true,
        
        },
        apuestaMaxima: {
        type: Number,
        required: true,
        
        }
        }, {
        timestamps: true
        });

export default model("Juegos", JuegosSchema);