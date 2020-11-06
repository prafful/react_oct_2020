import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Examples from './examples';
import Home from './home';
import Services from './services';
import Team from './team';


class Content extends React.Component {
    
    render() { 
        return ( 
            <Switch>
                <Route  path="/" exact component={Home}></Route>
                <Route path="/examples" component={Examples}></Route>
                <Route path="/services" component={Services}></Route>
                <Route path="/team" component={Team}></Route>
            </Switch>
         );
    }
}
 
export default Content;