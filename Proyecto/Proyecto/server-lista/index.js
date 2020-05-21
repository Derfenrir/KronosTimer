import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

mongoose.Promise=global.Promise;
const dbUrl="mongodb://localhost:27017/horario";
mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})
.then(mongoose=>console.log('Conectado a la BD en el puerto 27017'))
.catch(err=>console.log(err))

const app = express();
app.set('port',process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extend:true}));
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'),()=>{
    console.log('Servidor corriendo en el puerto' + app.get('port'));
})
