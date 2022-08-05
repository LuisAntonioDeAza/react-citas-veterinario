import React from 'react';
import { useState,useEffect } from 'react';
import Alert from './Alert';

const Form = ({setPatients,patients,patient,setPatient}) => {

    const [name,setName] = useState('');
    const [owner,setOwner] = useState('');
    const [email,setEmail] = useState('');
    const [date,setDate] = useState('');
    const [symtom,setSymtom] = useState('');
    const [alert,setAlert] = useState(false);
    const [succes,setSucces] = useState(false);

    useEffect(()=>{
            if(Object.keys(patient).length > 0){

                setName(patient.name);
                setOwner(patient.owner);
                setDate(patient.date);
                setEmail(patient.email);
                setSymtom(patient.symtom);
            }
    },[patient])
      
  
   
    const generateId = () =>{
        const random = Math.random().toString(36).substr(2);
        const date = Date.now().toString(36);

        return random+date;
    }


    const AddPatient = (e) =>{
        e.preventDefault();
 
        //Validacion del formulario

        if([name,owner,email,date,symtom].includes("")){
            setAlert(true);

            setTimeout(() => {
                setAlert(false);
            }, 3000);

            return;
        }else{
            setSucces(true);

            setTimeout(() => {
                setSucces(false);
            }, 5000);
         
        }

        //Editando
      

        //Agregando los pacientes
        const dataPatients = {
                name,
                owner,
                date,
                email,
                symtom
                
        }

        if(patient.id){
            //editando
            dataPatients.id = patient.id;

            const patientUpdate = patients.map(patientState => patientState.id === patient.id ? dataPatients : patientState);
            
           setPatients(patientUpdate);
           setPatient({});

           

        }else{
            dataPatients.id = generateId()
            setPatients([...patients,dataPatients]);
        }
        
      
        //Limpiar los formularios
        setName("");
        setOwner("");
        setDate("");
        setEmail("");
        setSymtom("");

    }

  

  
    return (
        <div className='bg-blue-300 lg:col-span-2 text-center pb-5  '>
            <div className='float-right'>
            <h1 className='font-bold text-3xl text-aling-righ'>Seguimiento de pacientes</h1>

            <p>Añade pacientes y {''} <span className='text-indigo-600 font-bold'>Administralo</span></p>

            <form 
            className='text text-left p-5 bg-white rounded-md formulario shadow-md'
            onSubmit={AddPatient}
            >
                <div className='  grid md:grid-cols-2 gap-3 place-content-end '>
                    <div>
                        <label className="font-bold">Nombre mascota:</label>
                       
                        <input 
                        onChange={e => setName(e.target.value)}
                        value={name}
                        type="text"
                        id="mascota"
                        className='w-full border-2 rounded-md p-2  focus:outline-none focus:border-sky-500'
                        placeholder='Ej:gudy'
                        />
                        
                    </div>
                    <div>
                        <label className="font-bold">Propietario:</label>
                        <input 
                        onChange={e => setOwner(e.target.value)}
                        value={owner}
                        id="propietario"
                        type="text"
                        className='w-full border-2 rounded-md p-2'
                        placeholder='Ej:Luis'

                        />
                        
                    </div>
                    <div>
                        <label className="font-bold">Email:</label>
                        <input 
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        id="email"
                        className='w-full border-2 rounded-md p-2 focus:outline-none focus:border-sky-500'
                        placeholder='Ej:coro@momil.com'
                        />
                        
                    </div>
                    <div>
                        <label className="font-bold">alta:</label>
                        <input 
                        onChange={e => setDate(e.target.value)}
                        value={date}
                        type="date"
                        id="alta"
                        className='w-full border-2 rounded-md p-2'
                        placeholder='1/01/2000'
                        />
                        
                    </div>
                    <div className='col-span-2'>
                    <label className="font-bold">Sintomas:</label>
                    <textarea 
                    onChange={e => setSymtom(e.target.value)}
                    value={symtom}
                    id="sintomas"
                    className='border-2 w-full rounded-md'
                    placeholder='Ej: No come nada'
                    />
                    </div>

                </div>

                  {alert ? <Alert
                  clss={'bg-red-500'}
                  txt={"Todos los campos son requeridos"}
                  /> :null}

                  {succes ?<Alert
                  clss={'bg-green-500'}
                  txt={"Paciente agregado con exito"}/> :null}

                <button
                className={`w-full rounded-md text-white font-bold p-3 mt-1 
                ${(patient.id ?'bg-green-500 hover:bg-green-600 ' 
                :
                "bg-blue-500  hover:bg-blue-600")}`}
                
                >
                    {patient.id ? "Editar paciente" : "Agregar paciente"}
                    
                </button>
            </form>
            </div>
        </div>
    );
};

export default Form;