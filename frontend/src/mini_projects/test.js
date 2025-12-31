
let isLoggedIn = 1;

export const Test = () => {
 let title;
 if (isLoggedIn){
    title = <h1>Welcome!</h1>
 }
 else{
    title = <h1>Not Welcome</h1>
 }

  return (
    <div>
      {title}
      <p>Some other content</p>
    </div>
  );
};





