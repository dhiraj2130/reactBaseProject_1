var React = require('react')
var ReactDOM = require('react-dom');
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';

import '../style/app.css'

const Home =() => <div><h1>Home</h1></div>
const About =() => <div><h1>About</h1></div>
const NotFound =() => <div><h1>Page Not Found</h1></div>

const Header = () => (
  <header>
    <nav>
      <NavLink  exact to='/'>Home</NavLink>
      <NavLink exact to={{pathname:'/about'}}>About</NavLink>
      <NavLink exact replace to='/contact'>NotFoundScenario</NavLink>
    </nav>
  </header>
)
const Main = () => (
  <main>
    <Switch>
      <Route  exact path ='/'component={Home}/>
      <Route  exact path ='/about' component={About}/>
      <Route component={NotFound}/>
    </Switch>
  </main>
)

class App extends React.Component{
  render(){
    return (

      <div>
        {/*<Route exact path ='/' component={Home}/>*/}
        {/*<Links/>*/}
        <Header/>
        <Main/>
      </div>
    );
  }
}



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('app')
)







