import React, {Component} from 'react';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'antd/dist/antd.css';
import './CSS/App.css';
import Routes from './utils/Routes';

class App extends Component {
  state = {
    visible: true
  };

  render() {
    return (
      <div className="App">
         <Routes/> 
      
      </div>
    );
  }
}


export default App;