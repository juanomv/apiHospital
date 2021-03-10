import {Sequelize,DataTypes} from 'sequelize';
import sequelize from '../database/configdb';

const Diagnostico = sequelize.define('Ficha_Diagnostico',{
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

export default Diagnostico;