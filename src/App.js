import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MyComponentWithFilters from './examples/with-filters';

const App = () => (
  <Router>
    <div>
      <Route path="/with-filters" component={MyComponentWithFilters} />
    </div>
  </Router>
);

export default App;
