import { Sequelize, DataTypes ,Model} from "sequelize";
import sequelize from "../database/configdb";
import Cita from '../models/Cita'
import Diagnostico from '../models/Diagnostico'
const Paciente = sequelize.define(
  "Paciente",
  {
    nss: {
      type: DataTypes.CHAR(8),
      primaryKey: true,
      validate:{
        len: {
            args: 8,
            msg: "debe ser de 8 caracteres",
          },
      }
    },
    nombre: {
      type: DataTypes.STRING(40),
      allowNull: false,
      validate: {
        notNull: {
          msg: "El nombre es obligatorio",
        },
        len: {
          args: [1, 45],
          msg: "no debe ser mayor a 60 caracteres",
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
    freezeTableName: true,
    timestamps:false
  }
);

Paciente.hasMany(Cita,{foreignKey: 'personaNSS',sourceKey:'nss'})
Cita.belongsTo(Paciente,{foreignKey: 'personaNSS',sourceKey:'nss'})

Paciente.hasMany(Diagnostico);
Diagnostico.belongsTo(Paciente)
export default Paciente;
