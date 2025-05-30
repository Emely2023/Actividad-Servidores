import jsonwebtoken from "jsonwebtoken"; // Token
import bcryptjs from "bcryptjs"; // Encriptar
import nodemailer from "nodemailer"; // Enviar correos
import crypto from "crypto"; // Generar código

import clientesModel from "../models/Clientes.js";
import { config } from "../config.js";

// Array de funciones
const registerClientController = {};

// Función para registrar cliente
registerClientController.registerClient = async (req, res) => {
  const { nombreCompleto, correo, contraseña, edad, pais } = req.body;

  try {
    // Verificar si el cliente ya existe
    const existCliente = await clientesModel.findOne({ correo });
    if (existCliente) {
      return res.json({ message: "Cliente ya existe" });
    }

    // Encriptar la contraseña
    const contraseñaHash = await bcryptjs.hash(contraseña, 10);

    // Guardar en la base de datos
    const nuevoCliente = new clientesModel({
      nombreCompleto,
      correo,
      contraseña: contraseñaHash,
      edad,
      pais,
      isVerified: false, // Aseguramos que empieza no verificado
    });

    await nuevoCliente.save();

    //token
    jsonwebtoken.sign(
        { id: newCustumer._id },
        config.JWT.secret,
        { expiresIn: config.JWT.expiresIn },
        (error, token) => {
            if (error) {
                console.log("error " + error);
                return res.status(500).json({ message: "Error generando token" });
            }
     
            res.cookie("authToken", token);
            return res.json({ message: "cliente guardado" });
        }
    );
     
           
           
     
     
        } catch (error) {
            res.json({message: "error"+error})
            res.json({message: "Error saving employee"})
     
        }
     }

export default registerClientController;
