import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import './theme.css';
import "antd/dist/antd.css";

import Views from './views';
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route>
            <Views />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
