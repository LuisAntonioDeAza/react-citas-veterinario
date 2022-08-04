import React from 'react';

const PatientComponent = ({paciente}) => {

    const {name,owner,email,symtom,date} = paciente;
    return (
        <>
             <div className='bg-white shadow-md rounded-md px-2 p-5'>
                <h1 className='text-2xl text-center text-indigo-600 font-black pb-3'>{name}</h1>
                <p className='font-bold'>Propietario: <span className='font-normal'>{owner}</span></p>
                <p className='font-bold'>Email: <span className='font-normal'>{email}</span></p>
                <p className='font-bold pb-4 pt-4'>Sintomas: <span className='font-normal text-justify'>{symtom}</span></p>
                <p className='text-gray-300 text-right pb-5 '>{date}</p>

                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1'>

                    <div className='bg-green-400 text-white px-2 py-2 text-center rounded-md cursor-pointer hover:bg-green-500 transition '>
                            <p>Editar</p>
                    </div>
                    <div className='bg-red-400 text-white px-2 py-2 text-center rounded-md p-3 cursor-pointer hover:bg-red-500'>
                            <p>Borrar</p>
                    </div>

                </div>


                </div>

             
               
        </>
        
    );
};

export default PatientComponent;