import React, {
  Component
} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import FormComponent from './components/FormComponent';
import {
  Switch,
  Route
} from 'react-router-dom'
import UserComponent from './components/UserComponent';


class App extends Component {
  render() {
    return ( 
      <Switch>
          <Route exact path='/add_user' render={(props) => <FormComponent store={this.props.store}/>} />
          <Route exact path='/users' component={UserComponent}/>
      </Switch>
    );
  }
}

export default App;