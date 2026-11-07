import Form from './Form';
import File from './File';
import { useState } from 'react';

function App() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    study: '',
    studyFrom: '',
    studyUntil: '',
    company: '',
    position: '',
    responsibilities: '',
    workFrom: '',
    workUntil: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((currentValues) => ({ ...currentValues, [name]: value }));
  }

  return (
    <main className="app-layout">
      <Form values={values} onChange={handleChange} />
      <File values={values} />
    </main>
  );
}

export default App;
