import Medico from "../models/Medico";

export async function crearMedico(req, res) {
  const { numeroColegiado, nombre, apellidos, telefono } = req.body;
  try {
    const medico = Medico.create({
      numeroColegiado,
      nombre,
      apellidos,
      telefono,
    });
    res.status(200).json({
      ok: true,
      medico,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error,
    });
  }
}

export async function getMedico(req, res) {
  try {
    const medico = await Medico.findOne({
      where: { numeroColegiado: req.params.id },
    });
    res.status(200).json({
      ok: true,
      medico,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error,
    });
  }
}

export async function getMedicos(req, res) {
  try {
    const medicos = await Medico.findAll();

    res.status(200).json({
      ok: true,
      medicos,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: "fallo en el servicio",
      error,
    });
  }
}

export async function updateMedico(req, res) {
  const { numeroColegiado, nombre, apellidos, telefono } = req.body;
  try {
    await Medico.update(
      {
        numeroColegiado,
        nombre,
        apellidos,
        telefono,
      },
      { where: { numeroColegiado: req.params.id } }
    );
    res.status(200).json({
      ok: true,
      message: "medico eliminado",
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error,
    });
  }
}

export async function deleteMedico(req, res) {
  try {
    await Medico.destroy({ where: { numeroColegiado: req.params.id } });
    res.status(200).json({
      ok: true,
      message: "medico eliminado",
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      error,
    });
  }
}
