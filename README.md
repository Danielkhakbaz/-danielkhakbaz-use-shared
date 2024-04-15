Installation

To install the use-shared package in your React project, use npm or yarn:

Bash
npm install use-shared
Use code with caution.
or

Bash
yarn add use-shared
Use code with caution.
Usage

Import SharedProvider:

Begin by importing the SharedProvider component from the use-shared package:

JavaScript
import { SharedProvider } from 'use-shared';
Use code with caution.
Wrap Your App with SharedProvider:

Wrap your React application's root component with the SharedProvider component. Pass an initial state object as a prop to the SharedProvider. This state object will be accessible throughout your entire application:

JavaScript
const state = {
  name: "Danial",
  lastName: "Khakbaz",
  age: 23,
  location: "Iran"
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SharedProvider state={state}>
      <App />
    </SharedProvider>
  </React.StrictMode>,
);
Use code with caution.
Use the useShared Hook:

In any component within your application, import the useShared hook from use-shared to access the shared state provided by the SharedProvider:

JavaScript
import { useShared } from 'use-shared';

const App = () => {
  const [data, setData] = useShared();

  return (
    <div>
      {/* Access and modify shared state using data and setData */}
    </div>
  );
};
Use code with caution.
data: This object represents the current state from the SharedProvider.
setData: This function allows you to update the shared state.
Complete Example

Here's a complete example demonstrating how to use use-shared in your React application:

main.jsx

JavaScript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { SharedProvider } from 'use-shared';

const state = {
  name: "Danial",
  lastName: "Khakbaz",
  age: 23,
  location: "Iran"
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SharedProvider state={state}>
      <App />
    </SharedProvider>
  </React.StrictMode>,
);
Use code with caution.
App.jsx

JavaScript
import React from 'react';
import { useShared } from 'use-shared';

const App = () => {
  const [data, setData] = useShared();

  const handleClick = () => {
    setData({ ...data, location: 'New York' });
  };

  return (
    <div>
      <p>Name: {data.name}</p>
      <p>Last Name: {data.lastName}</p>
      <p>Age: {data.age}</p>
      <p>Location: {data.location}</p>
      <button onClick={handleClick}>Change Location</button>
    </div>
  );
};

export default App;
Use code with caution.
This example creates a shared state object containing information about a person. The App component displays this information and provides a button to update the location.

Additional Considerations

Error Handling: Consider implementing error handling mechanisms in your useShared hook to gracefully handle potential issues when accessing or updating the shared state. This could involve validating input data to prevent unexpected state changes.

Complex Updates: For more complex state updates that might involve multiple values, you can use a spread operator (...) within the setData function to ensure that existing state properties aren't unintentionally overridden. For example:

JavaScript
const handleClick = () => {
  setData({ ...data, location: 'New York', age: data.age + 1 });
};
Use code with caution.
Testing: When building reusable React components like use-shared, it's crucial to write unit tests to ensure the component behaves as expected under different scenarios. This helps catch potential issues early in the development process.

By incorporating these suggestions, you can create a more robust and well-documented use-shared package that effectively addresses the need for convenient state management across React applications.
