import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from '../pages/Home';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import NotFound from '../pages/NotFound';
import Layout from './Layout';
import BadgeEdit from '../pages/BagdeEdit';
import BadgeDetails from '../pages/BadgeDetails';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';

function App(){
   return (<BrowserRouter> 
   	        <Layout>
   	          <Switch>
   	              <Route exact path="/" component={Home} />
	   	          <Route exact path="/badges" component={Badges} />
	   	          <Route exact path="/badges/new" component={BadgeNew} />
				  <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />	 
				  <Route exact path="/badges/:bagdeId/edit" component={BadgeEdit} />
	   	          <Route component={NotFound} />
   	          </Switch>
   	        </Layout>  
   	       </BrowserRouter>);
}
export default App;