import React, {useRef, useState, useEffect} from 'react';
import Form from './components/Form';

function App() {
  const baseData = {
    nama: "",
    email: "",
    noHp: "",
    bgPendidikan: "",
    kelas: "",
    harapan: ""
  }
  const baseError = {
    nama: "",
    email: "",
    noHp: "",
  }
  const imgSurat = useRef('')
  const [inputs, setInputs] = useState(baseData);
  const [errMsg, setErrMsg] = useState(baseError);
 
  return (
    <div className='App'>
      <Form inputs={inputs} 
      errMsg={errMsg} 
      imgSurat={imgSurat} 
      setInputs={setInputs} 
      setErrMsg={setErrMsg}/>
    </div>
  );
}

export default App;