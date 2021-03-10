import Historial from '../models/Historial';

export async function crearDiagnostico(req,res){
    const {personaNSS,medico }= req.body;
    try {
        const medico = await Medico.findAndCountAll();
        const numero = Math.floor( Math.random()*medico.count);
        const map =medico.map(()=>medico.rows.numeroColegiado);
        const cita =await Diagnostico.create({
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
    const {PacienteNss ,MedicoNumeroColegiado,diagnostico,tratamiento}= req.body;
    try {
        const cita =await Diagnostico.create({
            PacienteNss,
            MedicoNumeroColegiado,
            diagnostico,
            tratamiento
        })
        res.status(200).json({
            ok:true,
            mss: "diag creada",
            cita
        })
    } catch (error) {
        res.status(400).json({
            ok:false,
            mss: "error al crear diag",
            error
        })
    }
}
export async function getDiag(req,res){
    try {
        const diag= await Diagnostico.findOne({where:{codigo:req.params.id}}) 
      
        res.status(200).json(diag); 
    } catch (error) {
        res.status(400).json({
            ok:false,
            message:"fallo",
            error
        });
    }
}
export async function getDiags(req,res){
    try {
        const cita= await Diagnostico.findAll() 
        res.status(200).json(cita); 
    } catch (error) {
        res.status(400).json({
            ok:false,
            message:"fallo",
            error
        });
    }
}

export async function dropdiag(req,res){
    try {
        const CitaEliminada = Diagnostico.drop({where:{codigo:req.params.id}})
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

export async function updatediag(req,res){
    const {PacienteNss ,MedicoNumeroColegiado,diagnostico,tratamiento}= req.body;
    try {
        
        const cita =await Cita.create({
            PacienteNss,
            MedicoNumeroColegiado,
            diagnostico,
            tratamiento
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

