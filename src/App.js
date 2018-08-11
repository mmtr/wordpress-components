import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import MyComponentWithFilters from './examples/with-filters';
import MyDateTimePicker from './examples/date-time-picker';
import MyModal from './examples/modal';

import '@wordpress/components/build-style/style.css';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Route path='/date-time-picker' component={MyDateTimePicker} />
      <Route path='/modal' component={MyModal} />
      <Route path='/with-filters' component={MyComponentWithFilters} />
    </div>
  </Router>
);

export default App;
