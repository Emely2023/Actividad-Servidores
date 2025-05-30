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
      return res.status(400).json({ message: "Cliente ya existe" });
    }

    // Encriptar la contraseña
    const contraseñaHash = await bcryptjs.hash(contraseña, 10);

    // Crear nuevo cliente
    const nuevoCliente = new clientesModel({
      nombreCompleto,
      correo,
      contraseña: contraseñaHash,
      edad,
      pais,
      isVerified: false,
    });

    await nuevoCliente.save();

    // Generar token
    jsonwebtoken.sign(
      { id: nuevoCliente._id },
      config.JWT.secret,
      { expiresIn: config.JWT.expiresIn },
      (error, token) => {
        if (error) {
          console.error("Error al generar token:", error);
          return res.status(500).json({ message: "Error generando token" });
        }

        res.cookie("authToken", token);
        return res.status(201).json({ message: "Cliente guardado", token });
      }
    );
  } catch (error) {
    console.error("Error en el servidor:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export default registerClientController;
