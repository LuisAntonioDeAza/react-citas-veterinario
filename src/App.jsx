import Header from "./Components/Header"
import Form from "./Components/Form"
import PatientList from "./Components/PatientList"
import { useState } from 'react';

function App() {
const [patients,setPatients] = useState([]);
const [patient,setPatient] = useState({});

  return (
    <>
    <Header/>

    <div className=" mt-12 pr-4 pl-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
    <Form 
    patients={patients}
    setPatients={setPatients}
    />
    <PatientList
    patients={patients}
    />
    </div>

    </>
  )
}

export default App
