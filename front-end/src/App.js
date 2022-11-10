import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateForm from './pages/CreateForm';
import Homepage from './pages/Homepage';
import './App.css'
import AllForm from './components/allForms';
import { useEffect, useState } from 'react';
import Display from './components/DisplayTest';
import { URL } from './components/url';

function App() {

  const [response, setResponse] = useState()
  console.log(`${URL}/api/all-form`)
  useEffect(() => {
    fetch(`${URL}/api/all-form`)
      .then(res => res.json())
      .then(
        (result) => {
          setResponse(result)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create-form" element={<CreateForm />} />
        <Route path="/all-form" element={<AllForm result={response} />} />
        <Route path="/all-form/:slug" element={<Display result={response} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
