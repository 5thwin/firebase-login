import { useRoutes } from 'react-router';
import './App.css'
import { routes } from './Routes';

function App() {
  const elem = useRoutes(routes);
  return (
    <div className="App">
      <div>{elem}</div>
    </div>
  );
}

export default App;
