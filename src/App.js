// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Hello from './public/components/Hello';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <Hello name="Alligator" />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Hello from './components/organisms/Hello';

const App = () => {
  return <Hello name="Dolly" />;
};

export default App;
