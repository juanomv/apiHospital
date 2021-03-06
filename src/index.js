import app from './app'
import sequelize from "./database/configdb"
const PORT = process.env.PORT || 3000;
async function main(){
    try {
        await app.listen(PORT,()=>{
            console.log('conectado en el puerto',PORT);
        });
        await sequelize.authenticate();
        await sequelize.sync({force:true,alter:true}) ;
    } catch (error) {
        console.log('error :',error)
    }
    
}

main();