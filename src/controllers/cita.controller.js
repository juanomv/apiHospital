import Cita from '../models/Cita';

export async function crearCita(req,res){
    const {personanns}= req.body;
    try {
        const cita =await Cita.create(
            req
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
            error
        })
    }
}
export async function getCita(req,res){
    try {
        const cita= await Cita.findOne({where:{codigo:req.params.id}}) 
        if(!cita){
            res.status(200).json({
                ok:false,
                message:"no esxite cita"
            });  
        }
        res.status(200).json(cita); 
    } catch (error) {
        res.status(400).json({
            ok:false,
            message:"fallo",
            error
        });
    }
}
export async function getCitas(req,res){
    try {
        const cita= await Cita.findAll() 
        res.status(200).json(cita); 
    } catch (error) {
        res.status(400).json({
            ok:false,
            message:"fallo",
            error
        });
    }
}

export async function dropCita(req,res){
    try {
        const CitaEliminada = Cita.drop({where:{codigo:req.params.id}})
        if(!CitaEliminada){
            res.status(200).json({
                ok:false,
                message:"no esxite cita"
            }); 
        }
        res.status(200).json(CitaEliminada); 
    } catch (error) {
        res.status(400).json({
            ok:false,
            message:"fallo",
            error
        });
    }
}