import React, {Component} from "react";
import Definitions from './components/Definitions.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  render() {

      const definitions = [
        { dt: 'one', dd: 'two', id: 1 },
        { dt: 'another term', dd: 'another description', id: 2 },
      ];

      return (
          <div className="App">
              <div className="container mt-5">
                  <Definitions data={definitions} />
              </div>
          </div>
      );
  }
}

export default App;
