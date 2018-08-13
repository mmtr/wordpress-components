import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import MyDateTimePicker from './examples/date-time-picker';
import MyFontSizePicker from './examples/font-size-picker';
import MyFormToggle from './examples/form-toggle';
import MyModal from './examples/modal';
import MyQueryControls from './examples/query-controls';
import MyComponentWithFilters from './examples/with-filters';

import '@wordpress/components/build-style/style.css';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Route path='/date-time-picker' component={MyDateTimePicker} />
      <Route path='/font-size-picker' component={MyFontSizePicker} />
      <Route path='/form-toggle' component={MyFormToggle} />
      <Route path='/modal' component={MyModal} />
      <Route path='/query-controls' component={MyQueryControls} />
      <Route path='/with-filters' component={MyComponentWithFilters} />
    </div>
  </Router>
);

export default App;
