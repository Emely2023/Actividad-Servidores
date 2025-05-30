// Array de métodos ( C R U D)
const clientesController = {};


import ClientesModel from "../models/Clientes.js";

//GET
clientesController.getClientes = async (req, res) => {
const clientes = await ClientesModel.find()
res.json(clientes)
}

// POST
clientesController.createClientes = async (req, res) => {
    const{ nombreCompleto, correo, contraseña, edad, pais } = req.body;
    const newClientes = new ClientesModel ({nombreCompleto, correo, contraseña, edad, pais });
    await newClientes.save()
    res.json({ message : "Client saved"});
}
    //DELETE
clientesController.deleteClientes = async (req, res) => {
    await clientescontroller.findOneAndDelete(req.params.id)
    res.json({message:"Client deleted"})
}

//PUT
clientesController.updateClientes = async (req, res) => {
   //  Solicito todos los valores
    const {nombreCompleto, correo, contraseña, edad, pais} = req.body;

    await ClientesModel.findByIdAndUpdate(req.params.id,{
        nombreCompleto,
        correo,
        contraseña,
        edad,
        pais
    },{new: true}
);
// muestro un mensaje que todo se actualizó
res.json({ message: "Client uptated"});
};
export default clientesController;