import express from "express";

import cookieParser from "cookie-parser";

import cors from "cors"
//creo una constante que es igual a la libreria que importé//
const app = express(); 


app.use(
    cors({
      origin: "https://localhost:5173",
      // Permitir envío de cookies y credenciales
      credentials: true
      
    })
  );

//  que acepte datos en json
app.use(express.json());

//que postman acepte guardar cookies
app.use(cookieParser())
//exporto la constante para poder uar express en otros archivos
export default app;
