import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from '../src/View/Login';
import JurnalManage from '../src/View/Jurnal/jurnalManage';
import JurnalAdd from '../src/View/Jurnal/JurnalAdd';
import JurnalEdit from './View/Jurnal/jurnalEdit';
import AdminManage from './View/Admin/AdminManage';
import AdminAdd from './View/Admin/AdminAdd';
import AdminUpdate from './View/Admin/AdminUpdate';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/jurnal" component={JurnalManage} />
          <Route exact path="/jurnal-add" component={JurnalAdd} />
          <Route exact path="/jurnal-edit/:id" component={JurnalEdit} />
          <Route exact path="/admin" component={AdminManage} />
          <Route exact path="/admin-add" component={AdminAdd} />
          <Route exact path="/admin-edit/:id" component={AdminUpdate} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
