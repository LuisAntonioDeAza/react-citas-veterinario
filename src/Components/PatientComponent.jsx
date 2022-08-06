import React from 'react';

const PatientComponent = ({ paciente, setPatient, delatePatient }) => {
    const { name, owner, email, symtom, date } = paciente;

    const editPatient = (patient) => {
        setPatient(patient);
    }

    return (
        <>
            <div className='bg-white shadow-md rounded-md px-2 p-5 relative'>

            
                <h1 className='text-2xl text-center text-indigo-600 font-black pb-3'>{name}</h1>
                <p className='font-bold'>Propietario: <span className='font-normal'>{owner}</span></p>
                <p className='font-bold'>Email: <span className='font-normal'>{email}</span></p>
                <p className='font-bold pb-4 pt-4'>Sintomas: <span className='font-normal text-justify scrollbars'>{symtom.slice(0,100)+'...'}</span></p>
                {symtom.length > 100 ?(
                <div>
                    <a href="#miModal" className='font-bold text-indigo-600'>Leer mas...</a>
                        <div id="miModal" className="modal">
                        <div className="modal-contenido bg-gray-200 rounded-md shadow-md shadow-white">
                        <a href="#">X</a>
                        <h2 className='text-2xl text-center pb-5'>Sintomas de <span className='text-indigo-600'>{name}</span></h2>
                        <p className='text-justify'>{symtom}</p>
                    </div>  
                    </div>
                </div>
) :null}
                <p className='text-gray-300 text-right pb-5 '>{date}</p>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1'>
                    {/* edit button */}
                    <input className='transition ease-in-out delay-75 text-green-500 font-bold px-2 py-2 text-center rounded-md p-3 cursor-pointer  border-2  border-green-500   border-dashed hover:scale-105 '
                        onClick={() => editPatient(paciente)}
                        value='Editar'
                    />

                    {/* edit button */}
                    <input className='transition ease-in-out delay-75 text-red-500 font-bold px-2 py-2 text-center rounded-md p-3 cursor-pointer  border-2  border-red-500   hover:scale-105 border-dashed'
                        onClick={() => delatePatient(paciente.id)}
                        value={'Borrar'}
                    />
                </div>
            </div>
       </>

    );
};

export default PatientComponent;