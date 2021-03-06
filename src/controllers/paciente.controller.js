import Paciente from '../models/Paciente'

export async function IngresarPaciente(req,res){
    const {nss,nombre,apellidos,telefono}= req.body
    try {
        const paciente =await Paciente.create({
            nss,
            nombre,
            apellidos,
            telefono
        });
        res.status(200).json({
            ok:true,
            message:"paciente ingresado",
            paciente
        })
    } catch (error) {
        res.status(400).json({
            ok:false,
            message:"paciente no registrado",
            error
        })
        
    }
    
};

export async function getPaciente(req,res){
    try {
      const pacientes = await Paciente.findAll();  
      res.status(200).json(pacientes);
    } catch (error) {
        res.status(400).json(
            {
                ok:false,
                message: "fallo la peticion"
            }
        )
    }
};

export async function getPacientes(req,res){
   res.json('pacientes')
    
};

export async function putPaciente(req,res){
    res.json('update pasiente')
}

