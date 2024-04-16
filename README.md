## Installation

To install the **use-shared** package in your React project, use **npm** or **yarn**:
```
npm install use-shared
```
or
```
yarn add use-shared
```
## Usage

### - Import SharedProvider

Begin by importing the **SharedProvider** component from the **use-shared** package:

```
import { SharedProvider } from 'use-shared';
```

### - Wrap Your App with SharedProvider

Wrap your React application's root component with the **SharedProvider** component. Pass an initial state object as a prop to the **SharedProvider**. This state object will be accessible throughout your entire application:

```
const state = {
  name: "Danial",
  lastName: "Khakbaz",
  profession: "Software Engineer"
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SharedProvider state={state}>
      <App />
    </SharedProvider>
  </React.StrictMode>,
);
```

In any component within your application, import the **useShared** hook from **use-shared** to access the shared state provided by the **SharedProvider**:

```
import { useShared } from 'use-shared';

const App = () => {
  const [data, setData] = useShared();

  return (
    <div>
      {/* Access and modify shared state using data and setData */}
    </div>
  );
};
```
``data: This object represents the current state from the SharedProvider.``
<br />
``setData: This function allows you to update the shared state.``

### - Complete Example

- ****main.jsx****
```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SharedProvider } from 'use-shared';

const state = {
  name: "Danial",
  lastName: "Khakbaz",
  profession: "Software Engineer"
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SharedProvider state={state}>
      <App />
    </SharedProvider>
  </React.StrictMode>,
);
```

- ****App.jsx****

```
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
```

## License

MIT

---

> [danieloo.com](https://danieloo.vercel.app/) &nbsp;&middot;&nbsp;
> GitHub [@danielkhakbaz](https://github.com/Danielkhakbaz) &nbsp;&middot;&nbsp;
> Twitter [@danielkhakbaz](https://twitter.com/DanielKhakbaz)
