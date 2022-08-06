import Header from "./Components/Header"
import Form from "./Components/Form"
import PatientList from "./Components/PatientList"
import { useState, useEffect } from 'react';

function App() {



  /*This useState checks if there is data stored in local storage and extracts it, keeping it stored in the useState,
   if it does not find data it starts as an empty array*/
  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem('patients')) ?? []);

  //This useSate is used to save patient data for editing.
  const [patient, setPatient] = useState({});

//This useEffect is executed every time the useState of patients changes, to add the new data to localStorange(NEW PATIENTS)
  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);


  const delatePatient = (id) => {
    const eliminatedPatient = patients.filter(p => p.id !== id);
    setPatients(eliminatedPatient);

  }

  return (
    <>

      <Header />
      <div className=" mt-12 pr-4 pl-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">

        <Form
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />

        <PatientList
          patients={patients}
          setPatient={setPatient}
          delatePatient={delatePatient}
        />
        
      </div>


    </>
  )
}

export default App
