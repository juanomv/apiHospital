import Cita from '../models/Cita';
import Medico from "../models/Medico"
import sumarDias from '../libs/generatefecha';
export async function crearCitaMedico(req,res){
    const {personaNSS }= req.body;
    try {
        const medico = await Medico.findAndCountAll();
        const numero = Math.floor( Math.random()*medico.count);
        const map =medico.map(()=>medico.rows.numeroColegiado);
        const cita =await Cita.create({
            personaNSS,
            fechahora: sumarDias(),
            MedicoNumeroColegiado : map[numero]
        })
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
export async function crearCitaEspecialista(req,res){
    const {personaNSS ,EspecialistumNumeroColegiado}= req.body;
    try {
        const cita =await Cita.create({
            personaNSS,
            fechahora: sumarDias(),
            EspecialistumNumeroColegiado
        })
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

export async function updateCitaMedico(req,res){
    const {personaNSS , fechahora , MedicoNumeroColegiado  }= req.body;
    try {
        
        const cita =await Cita.create({
            personaNSS,
            fechahora,
            MedicoNumeroColegiado 
        },{where:{codigo:req.params.id}})
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

export async function updateCitaEspecialista(req,res){
    const {personaNSS , fechahora , EspecialistumNumeroColegiado  }= req.body;
    try {
        
        const cita =await Cita.create({
            personaNSS,
            fechahora,
            EspecialistumNumeroColegiado
        },{where:{codigo:req.params.id}})
        res.status(200).json({
            ok:true,
            mss: "cita actualizada",
            cita
        })
    } catch (error) {
        res.status(400).json({
            ok:false,
            mss: "error al actulizar cita",
            error
        })
    }
}