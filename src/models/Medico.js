import { DataTypes } from "sequelize";
import sequelize from "../database/configdb";

import Cita from "./Cita"
import Diagnostico from '../models/Diagnostico'
const Medico = sequelize.define(
  "Medico",
  {
    numeroColegiado: {
      type: DataTypes.CHAR(8),
      primaryKey: true,
      validator: {
        len: {
          args: 8,
          msg: "El codigo debe tener 8 digitos",
        },
      },
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false,
      validate: {
        notNull: {
          msg: "se debe ingresar el nombre",
        },
      },
    },
    apellidos: {
      type: DataTypes.STRING(100),
      allowNull: false,
      notNull: {
        msg: "los apellidos son obligatorios",
      },
      len: {
        args: [1, 45],
        msg: "no debe ser mayor a 100 caracteres",
      },
    },
    telefono: {
      type: DataTypes.CHAR(10),
      notNull: {
        msg: "El numero de telefono es obligatorio",
      },
      len: {
        args: 10,
        msg: "numero invalido debe contener 10 digitos",
      },
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
 Medico.hasMany(Cita);
 Cita.belongsTo(Medico)

 Medico.hasMany(Diagnostico);
 Diagnostico.belongsTo(Medico);
 
export default Medico;
