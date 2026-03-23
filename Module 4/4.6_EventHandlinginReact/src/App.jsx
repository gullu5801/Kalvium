import { useState } from 'react'
import './App.css'


// React uses onClick (camelCase)
// You pass a function (not string)
// React handles everything automatically

function App() {

  function handleClick() {
    alert("Button clicked!");
  }

  // problem comes when using forms

  const initialFormState = {
  name: "",
  email: "",
  password: ""
};

  const [formData, setFormData] = useState({initialFormState});

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value                  //
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();          //
    console.log(formData);
  }

  function handleReset(){
    event.preventDefault();
    setFormData(initialFormState)
  }

  return (
    <>

      <h1>Event Handlers</h1>
      <br />
      <button onClick={handleClick}>Alert</button>
      <br />
      <div>
        <h2>Registration Form</h2>
        <br />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />

          <br /><br />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />

          <br /><br />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
          />

          <br /><br />
          <button type = "reset" onClick={handleReset}>reset</button>

          <button type="submit">Submit</button>
        </form>

        <h3>Output:</h3>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
      </div>


    </>
  )
}

export default App
