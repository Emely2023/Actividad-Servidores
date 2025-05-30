import express from "express";
import clientesRoutes from "./src/routes/clientes.js"
import juegosRoutes from "./src/routes/juegos.js"
import registerClientRoutes from "./src/routes/registerClient.js";
import cookieParser from "cookie-parser";

import cors from "cors"

//import { validateAuthToken } from "./src/middlewares/validateAuthToken.js";

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

//rutas
app.use("/api/clientes",clientesRoutes);
app.use("/api/juegos",juegosRoutes);
app.use("/api/registerClient", registerClientRoutes);

//exporto la constante para poder uar express en otros archivos
export default app;
