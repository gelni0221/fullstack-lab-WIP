import './test1.css';


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

 let x = 1; 

  return (
  (isLoggedIn) ? <h1 className='welcome-text'>{(x) ==  0 ? "Welcome!" : "WELCOME!!"} </h1> : 
  <h1 className='not-welcome-text'>Not Welcome</h1>
  
    
  );
};





