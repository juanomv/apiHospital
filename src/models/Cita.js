import {DataTypes, HasOne} from 'sequelize';
import sequelize from '../database/configdb'

const Cita = sequelize.define("Cita",{
    codigo :{
        type:DataTypes.UUID,
        primaryKey:true,
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