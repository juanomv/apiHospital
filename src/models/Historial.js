import {Sequelize,DataTypes} from 'sequelize';
import sequelize from '../database/configdb';
import Cita from '../models/Cita'
import Paciente from '../models/Paciente'
import Diagnostico from '../models/Diagnostico'
import Especialista from '../models/Especialista'
const Historial = sequelize.define('Historial',{
    codigo:{
        type:DataTypes.UUID,
        primaryKey:true
    },
    diagnostico:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    tratamiento:{
        type:DataTypes.TEXT,
        allowNull:false
    }
},{
    freezeTableName:true
});



Historial.belongsToMany(Cita,{through:'cita-his'});
Cita.belongsToMany(Historial,{through:'cita-his'})

Paciente.hasOne(Historial)
Historial.belongsTo(Paciente);

Diagnostico.belongsToMany(Historial,{through:'diag-his'});
Historial.belongsToMany(Diagnostico,{through:'diag-his'});

Especialista.belongsToMany(Historial,{through:'espe-his'});
Historial.belongsToMany(Especialista,{through:'espe-his'});

export default Historial;