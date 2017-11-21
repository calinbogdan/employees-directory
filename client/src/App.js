import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router';

import Home from './components/pages/Home';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            {/* <Navigation/> */}
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
