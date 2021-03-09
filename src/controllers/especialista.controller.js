import Especialista from '../models/Especialista';

export async function CrearEspecialista(req,res){
    const {numeroColegiado,nombre,apellidos,telefono,especialidad} = req.body;
    try {
      const espe =await Especialista.create({
        numeroColegiado,
        nombre,
        apellidos,
        telefono,
        especialidad
      }) ;
      res.status(200).json({
          ok:true,
          espe
      });

    } catch (error) {
        res.status(400).json({
            ok:flase,
            error
        });
    }
}

export async function getEspecialista(req,res){ 
    try {
        const espe = await Especialista.findOne({where:{numeroColegiado:req.params.id}});
        res.status(200).json({
            ok:true,
            espe
        })
    } catch (error) {
        res.status(400).json({
            ok:flase,
            error
        });
    }
}

export async function getEspecialistas(req,res){
    try {
        const espes = await Especialista.findAll();
        res.status(200).json({
            ok:true,
            espes
        })
    } catch (error) {
        res.status(400).json({
            ok:flase,
            error
        });
    }
}

export async function updateEspecialistas(req,res){
    try {
        const espes = await Especialista.update({where:{numeroColegiado:req.params.id}});
        res.status(200).json({
            ok:true,
            espes
        })
    } catch (error) {
        res.status(400).json({
            ok:flase,
            error
        });
    }
}

export async function deleteEspecialistas(req,res){
    try {
        const espes = await Especialista.destroy({where:{numeroColegiado:req.params.id}});
        res.status(200).json({
            ok:true,
            espes
        })
    } catch (error) {
        res.status(400).json({
            ok:flase,
            error
        });
    }
}
