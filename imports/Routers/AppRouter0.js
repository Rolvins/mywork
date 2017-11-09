import  React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Public from '../ui/other/Public';
import PageNotFound from '../ui/other/PageNotFound';
import  {
  Home,
  EditProfile1,
} from '../ui/other/Pages';

 export const history = createHistory();

const AppRouter0 = () => (
  <Router history={history}>
     <div>
  <Switch>
    <Route  path="/" component={Public} exact={true}/>
    <Route path="/home" component={Home} />
    <Route path="/EditProfile" component={EditProfile1} />
    <Route path="*"  component={PageNotFound} />
  </Switch>
  </div>
  </Router>

);
export default AppRouter0;
