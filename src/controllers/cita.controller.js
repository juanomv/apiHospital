import Cita from '../models/Cita';

export async function crearCita(req,res){
    
    try {
        const cita =await Cita.create(
            req.body
        )
        res.status(200).json({
            ok:true,
            mss: "cita creada",
            cita
        })
    } catch (error) {
        res.status(400).json({
            ok:false,
            mss: "error al crear cita",
            cita
        })
    }
}