import './test1.css';
import { useState, useRef  } from 'react';

// BASIC REACT COMPONENT WITH IF ELSE AND HTML
// truth false values if isLoggedIn is true then welcome else not welcome 
let isLoggedIn = true;

export const Test = () => {
 let title;
 if (isLoggedIn){
    title = <h1 className='welcome-text'>Welcome!</h1>
 }
 else{
    title = <h1 className='not-welcome-text'>Not Welcome</h1>
 }

  return (
    <div>
      {title}
      <p>Some other content</p>
    </div>
  );
};
export const Test1 = () => {
 let title;
 let x = 0;
 if (isLoggedIn){
  if (x == 10){
    title = <h1 className='welcome-text'>Welcome!</h1>
  }
  else{
    title = <h1 className='welcome-text'>WELCOME!</h1>
  }
    
 }
 else{
    title = <h1 className='not-welcome-text'>Not Welcome</h1>
 }

  return (
    <div>
      {title}
    </div>
  );
};
// TERNARY OPERATOR I DID IT LOL I JUST CHANGED IT FROM THE TEST1
export const Test2 = () => {

 let x = 0; 

  return (
  (isLoggedIn) ? <h1 className='welcome-text'>{(x) ==  0 ? "Welcome!" : "WELCOME!!"} </h1> : 
  <h1 className='not-welcome-text'>Not Welcome</h1>
  
    
  );
};
// YOU CAN PUT OTHER COMPONENTS IN A COMPONENT
// ALSO PROPS
export const Test3 = (props) => {
  // WITH PROPS IT WILL BE return <Test3 name="Nigel!"/>;
  // WITHOUT PROPS IT WILL BE return <Test3/>;
  // i can put like this if many props will be needed, like in the res json??? me thinks
//   const carInfo = {
//   name: "Ford",
//   model: "Mustang",
//   color: "red",
//   year: 1969
// };
// const carInfo = ["Ford", "Mustang"]; or in array 

  return(
  <>
  <Test1/>
  <Test2/>
  <h1>{props.name}</h1>
  </>
  );
}

// USING DESTRUCTURING PROP ISTRUE WITH TERNARY OPERATOR INSIDE THE RETURN AND 2 COMPONENTS
export const Test4 = ({isTrue}) => {

  return(
  <>{isTrue ? <Test1/> : <Test2/>}  </>
  // IF LEFT SIDE TRUE DO RIGHT SIDE WITH &&
  // <>{isTrue && <Test1/>}  </>
  );
}

export const Test5 = () => {
// FAKE DATA - OFC USE SQL DATA INSTEAD IF THIS
  const accounts = [
    {id: 1, username: 'admin', password: 'admin'},
    {id: 2, username: 'admin1', password: 'admin1'},
    {id: 3, username: 'admin2', password: 'admin2'},
  ];

  return(
    // YOU USE MAP TO ITERATE THE ACCOUNT DATA
    <>
    <h1>Accounts: </h1>
    <or>
    {accounts.map((account) => <li key={account.id}>
      Username: {account.username} |
      Password: {account.password}
      </li>)}

    </or>
    </>
  );
}

export const Test6 = () => {
    const [name, setName] = useState("");

  function handleChange(e) {
    // e.target.value = the current content of the input field
    setName(e.target.value);
  }
  return(
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          // onchange makes it dynamic
          onChange={handleChange}
        />
      </label>
      <p>Current value: {name}</p>
    </form>
  );
}

export const Test7 = () => {

  const [name, setName] = useState("");
  function handleClick(e) {
    setName(inputRef.current.value);
  }
  const inputRef = useRef(null);
// useRef is a React hook that gives you a persistent reference to something that doesn’t trigger a re-render when it changes.
// Think of it like a box you can put a value in, and React will remember it between renders.
  return(
    <form>
      <label>Change your Name <br />
      <input 
      type="text"     
      ref= {inputRef}
      ></input>
      </label>
      
      <button
      onClick={handleClick}
      type="button"
      ></button>
      <p>{name}</p>
    </form>

  );
}





