import Medico from '../models/Medico';

export async function getMedicos (req,res){
    try {
        const medicos = await Medico.findAll();
        if(!medicos){
            res.status(201).json({
                ok:false,
                message: 'No hay Medicos',
            });
        }
        res.status(200).json({
            ok:true,
            medicos
        });
    } catch (error) {
        res.status(400).json({
            ok:false,
            message:"fallo en el servicio"
        });
    }
   

}