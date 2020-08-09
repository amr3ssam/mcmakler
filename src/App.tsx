import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import ApplicantPage from '../src/pages/applicantPage'

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect push to="/applicants" />
          </Route>
          <Route exact path="/applicants" component={ApplicantPage} />
        </Switch>
     </Router>
    </div>
  );
}

export default App;
