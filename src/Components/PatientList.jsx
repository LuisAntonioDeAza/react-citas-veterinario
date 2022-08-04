import React from 'react';
import PatientComponent from './PatientComponent';

const PatientList = ({patients}) => {
    console.log(patients.length)
    return (
        <div className=' bg-red-400  lg:col-span-4 '>
            <h1 className='font-black text-3xl text-center'>Listado de pacienntes</h1>

            <p className='text-center'>Administra tus <span className='text-indigo-600 font-bold'>Pacientes y citas</span></p>


            <div className='  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 px-1'>

               {patients.length ===0 ? <h1 className='col-span-4 text-center'>No tienes pacientes, Agrega uno </h1>:
               patients.map((paciente)=>(

                        <PatientComponent 
                        key={paciente.id}
                        paciente={paciente}
                        />
               ))
               }
               
            </div>
        </div>
    );
};

export default PatientList;