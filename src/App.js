import './styles/variables.css';
import './styles/App.css';
import Sidenav from './Components/Sidenav/Sidenav';
// import Home from './Components/pages/Home';
import Areas from './Components/pages/Registrations/Areas';
import Equipments from './Components/pages/Registrations/Equipments';
import Groups from './Components/pages/Registrations/Groups';
import LotsBook from './Components/pages/Registrations/LotsBook';
import PasswordsApp from './Components/pages/Registrations/PasswordsApp';
import Peoples from './Components/pages/Registrations/Peoples';
import Units from './Components/pages/Registrations/Units';
import Operators from './Components/pages/Registrations/Operators';
import Reports from './Components/pages/Reports';
import Notices from './Components/pages/Notices';
import Settings from './Components/pages/Settings';
import Help from './Components/pages/Help';
import Exit from './Components/pages/Exit';
import { Route, Switch } from 'react-router-dom';
import RightSidebar from './Components/RightSidebar/RightSidebar';

function App() {
  return (
    <div className="App">
      <Sidenav />
      <div className="main-container grid">
        <Switch>
          <Route exact path="/" component={Peoples} />
          <Route exact path="/cadastros/pessoas" component={Peoples} />
          <Route exact path="/cadastros/equipamentos" component={Equipments} />
          <Route exact path="/cadastros/grupos" component={Groups} />
          <Route exact path="/cadastros/areas" component={Areas} />
          <Route exact path="/cadastros/unidades" component={Units} />
          <Route exact path="/cadastros/livro-de-lotes" component={LotsBook} />
          <Route
            exact
            path="/cadastros/senhas-do-app"
            component={PasswordsApp}
          />
          <Route exact path="/cadastros/operadores" component={Operators} />
          <Route exact path="/relatorios" component={Reports} />
          <Route exact path="/avisos" component={Notices} />
          <Route exact path="/configuracoes" component={Settings} />
          <Route exact path="/ajuda" component={Help} />
          <Route exact path="/sair" component={Exit} />
        </Switch>
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
