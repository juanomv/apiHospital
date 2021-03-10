import {DataTypes, HasOne} from 'sequelize';
import sequelize from '../database/configdb'

const Cita = sequelize.define("Cita",{
    codigo :{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    fechaHora:{
        type:DataTypes.DATE,
    }
   
},
    {
        timestamps:false
    }
);


export default Cita;