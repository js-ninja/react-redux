import React, {
  Component
} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import FormComponent from './components/FormComponent';

class App extends Component {
  render() {
    return ( 
      <FormComponent store={this.props.store}/>
    );
  }
}

export default App;