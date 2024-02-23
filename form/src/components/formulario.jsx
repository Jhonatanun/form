import {useForm} from 'react-hook-form';
import { validadorEdad } from './validadores';

const Formulario = () => {
    

    const { register, formState: { errors }, watch , handleSubmit } = useForm({
        defaultValues: {
            nombre:'Jhonatan',
            apellido: 'Urrego Nieves',
            edad: '18',
            direccion: 'Calle 45 No 15c',
            telefono: '3013199716',
            pais: 'Colombia'
        

        }
    });

    const onSubmit = (data) => {
        
        console.table(data);
    }


    const incluirTelefono = watch('incluirTelefono');

    return <div  style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      }}>
                
                <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '100px'}}> 
                <h1>SMARTEST</h1>
                    <div>
                        <h2> Datos Del Aprendiz</h2>
                    <label>Nombre</label>
                    <input type="text" name="nombre" { ...register('nombre', {
                        required: true
                    })}/>
                    {errors.nombre?.type === 'required' && <p>El campo Nombre es requerido</p>}
                    </div>
                    <div>
                        <label>Apellido</label>
                        <input type="text" name="apellido" {...register('apellido', {
                            required: true
                        })}/>
                        {errors.apellido?.type === 'required' && <p>El campo Apellido es requerido</p>}
                    </div>
                    <div>
                        <label>Dirección</label>
                        <input type="text" name="direccion"  {...register('direccion', {
                            required: true
                        })} />
                        {errors.direccion?.type === 'required' && <p>El campo Dirección es requerido</p>}
                        
                    </div>
                    <div>
                        <label>Edad</label>
                        <input type="text" name='edad' {...register('edad', {
                            validate: validadorEdad
                        })}/>
                        {errors.edad  && <p>La edad estar entre los 18 y 70 años </p>} 
                    </div>
                    <div>
                        <label>País</label>
                        <select name="pais" id="pais" {...register('pais', {
                            required: true
                        })}> 
                        {errors.pais?.type === 'required' && <p>El campo Pais es requerido</p>}
                            <option value="Colombia">Colombia</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Argentina">Argentina</option>
                        </select>
                    </div>
                    <div>
                        <label>Incluir teléfono</label>
                        <input type="checkbox" name='incluirTelefono' {...register('incluirTelefono')}/>
                    </div>
                    {incluirTelefono && (
                      <div>
                           <label>Teléfono</label>
                           <input type="text" name='telefono' {...register('telefono')}/>
                       </div>
                    )}
                 
                    <input type="submit" value="Enviar"/>
                    
               
                  
                </form>
           </div>
    
}

export default Formulario;