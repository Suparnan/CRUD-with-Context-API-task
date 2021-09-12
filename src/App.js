import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as  Router, Route, Switch } from "react-router-dom";
import DataProvider from './context';
import { Create } from "./components/Create.js";
import { Read } from "./components/Read.js";
import { Edit } from "./components/Edit.js";



function App() {
  return (
    <div className="App">
      <DataProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Create} />
              <Route exact path="/read" component={Read} />
              <Route exact path="/edit/:id" component={Edit} />
            </Switch>
          </Router> 
      </DataProvider>
    </div>
  );
}

export default App;
