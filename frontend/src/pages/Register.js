import {useState} from 'react';
import './Register.css'
export const Register = () =>{
const [inputs,setInputs] = useState({});

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]:value}))
  }
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    alert("THANK YOU");
  }

  return(
<body>

    <form onSubmit={handleSubmit}>
    <div>
        <h1>Register</h1>
        <label>
          <input 
          type="text"
          name="username"
          value={inputs.username}
          onChange={handleChange}
          />
        </label>
        <label>
          <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          />
        </label>
        <button type="submit"></button>
    </div>
    </form>

</body>

  );
}