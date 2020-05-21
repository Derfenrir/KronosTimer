import mongoose, {Schema} from 'mongoose';

const estudiante= new Schema({
    matricula: {type: String,required},
    nombre: {type:String,required},
    apellidos:{type:String,required},
    email:{type:String ,required},
    createdAt: {type:Date, default: Date.now}
});

const Estudiante = mongoose.model('alummno',estudiante);
export default Estudiante;
