// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
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
//       </header>
//     </div>
//   );
// }

// export default App;
// import React from 'react'

// function App() {
//   return (
//     <div className='main'>
//     <h1>hammad</h1>
//     <h2>farooq</h2>
//     <p>lorem23</p>
//     <q>kokl,msksmdnsmndm</q>
//     <q>kokl,msksmdnsmndm</q>
//     </div>
//   )
// }

// export default App




// import React, { useState } from 'react';
// import './index.css';

// function App() {
//   // Initialize the state
//   const [count, setCount] = useState(0);

//   // Handlers for the buttons
//   const handleIncrement = () => setCount(count + 1);
//   const handleDecrement = () => setCount(count - 1);
//   const handleRefresh = () => setCount(0);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Counter</h1>
//         <p>Current Count: {count}</p>
//         <div>
//           <button onClick={handleIncrement}>Increment</button>
//           <button onClick={handleDecrement}>Decrement</button>
//           <button onClick={handleRefresh}>Refresh</button>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import './index.css';

// function App() {
//   // Initialize the state
//   const [count, setCount] = useState(0);


//   // Handlers for the buttons
//   const handleIncrement = () => setCount(count + 1);
//   const handleDecrement = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   }
//   const handleRefresh = () => setCount(0);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Counter App</h1>
//         <p>Current Count: {count}</p>
//         <div>
//           <button onClick={handleIncrement}>Increment</button>
//           <button onClick={handleDecrement}>Decrement</button>
//           <button onClick={handleRefresh}>Refresh</button>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;







// import react , { useState } from 'react';
// import "./index.css"
// function App() {
  
//     const [count,setCount] = useState(0);

//     const Increment = () => setCount(count + 1);
    
// const Decrement = () => {
//   if(count > 0){
//     setCount(count - 1);
//     console.log(setCount);
//   }

// }
// const refresh = () => setCount(0);

// return (<div className="App">
//       <header className="App-header">
//        <h1>Counter App</h1>
//         <p>Current Count: {count}</p>
//         <div>
//           <button onClick={Increment}>Increment</button>
//           <button onClick={Decrement}>Decrement</button>
//           <button onClick={refresh}>Refresh</button>
//         </div>
//       </header>
//     </div>   );
// }



// export default App 

import React, { useState } from 'react';
import './index.css';

function App() {
  // Initialize the state
  const [count, setCount] = useState(0);

  // Handlers for the buttons
  const handleIncrement = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      console.log(`Incremented: ${newCount}`);
      return newCount;
    });
  };

  const handleDecrement = () => {
    setCount(prevCount => {
      if (prevCount > 0) {
        const newCount = prevCount - 1;
        console.log(`Decremented: ${newCount}`);
        return newCount;
      }
      return prevCount;
    });
  };

  const handleRefresh = () => {
    setCount(0);
    console.log('Count reset to 0');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter</h1>
        <p>Current Count: {count}</p>
        <div>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
          <button onClick={handleRefresh}>Refresh</button>
        </div>
      </header>
    </div>
  );
}

export default App;









