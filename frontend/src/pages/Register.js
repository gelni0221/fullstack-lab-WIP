import {useState, useEffect, useMemo} from 'react';
import {Link} from 'react-router-dom';
import './Register.css';
import {DateOfBirthSelector} from '../components/DOB_Selector.js';
const URL = process.env.REACT_APP_API_URL

export const Register = () =>{
const [inputs,setInputs] = useState({
  firstname: '',
  lastname: '',
  gender: '',
  username: '',
  password: ''

});
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  // idk how this works need to learn date rn 01/14/26
const combined = useMemo(() => {
  return { ...inputs, year, month, day };
}, [inputs, year, month, day]);

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]:value}))
  }
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await fetch(`${URL}/user/api/v1/register`,{
      method:'POST',
      headers:{'Content-type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify(combined)
    });
    const data = await response.json();
    console.log(data);
  };

  return(
    <form onSubmit={handleSubmit}>
      <div className="title" ><h1>E-Commerce Website</h1></div>
      <div className="container">
        
    <div className="register_div">
        <h2>Create a new Account</h2>
        <p>at your service.</p>
        <div className="row">
        <label>
          <input 
          type="text"
          name="firstname"
          value={inputs.firstname}
          onChange={handleChange}
          placeholder='First Name'
          />
        </label>
        <label>
          <input 
          type="text"
          name="lastname"
          value={inputs.lastname}
          onChange={handleChange}
          placeholder='Last Name'
          />
        </label>
        </div>
        <div>
        <DateOfBirthSelector
          year={year}
          setYear={setYear}
          month={month}
          setMonth={setMonth}
          day={day}
          setDay={setDay}
        />
        </div>
        <div className="row">
          <label>
            Gender:
          <span className="radio-button">Male
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
            checked={inputs.gender === "Male"}
          />
          </span>
        </label>
        <label>
          <span className="radio-button">Female
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
            checked={inputs.gender === "Female"}
          />
          </span>
        </label>
        <label>
          <span className="radio-button">Custom
          <input
            type="radio"
            name="gender"
            value="Others"
            onChange={handleChange}
            // MAYBE FUNCTION IN CHECKED TO CREATE A NEW INPUT WHERE I PUT THE CUSTOM PRONOUN
            // checked={}
          />
          </span>
        </label>
        </div>
        <label>
          <input 
          type="text"
          name="username"
          value={inputs.username}
          onChange={handleChange}
          placeholder='Username'
          />
        </label>
        <label>
          <input
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          placeholder='New Password'
          />
        </label>
        <button className="form_submit" type="submit">Sign Up</button>
        <Link to='/login'>Already have an account?</Link>
    </div>
    </div>
    </form>
  );
}