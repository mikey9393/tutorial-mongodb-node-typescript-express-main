import { createRoot } from 'react-dom/client'; // will use react-dom/server *for the server-side.
import React from 'react';



// const Header = (props) => { // passing props w/out destructuring.
  //   return (
    //     <div>
    //       <h1>{props.title}</h1>
    //     </div>
    //   ); // In App => <Header message="Naming Contests" />

  const Header = ({message}) => { // passing props w/destructuring.
  return (
    <div className="header">
      { message }
    </div>
  );
}
const App = () => {

  return (
    <div className="container">
      {/* In HTML attribute - In React it's props.  */}
      <Header message="Naming Contests" />
    </div>

  )
  //return React.createElement('Div', null, "Hello React");
  
}

const container = document.querySelector('#app');
const root = createRoot(container);
root.render(<App/>);