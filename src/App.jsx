import React from 'react';

// import Home from './Home';
import Contact from './Contact';
import { Switch ,Route,Redirect } from 'react-router';
import Home from './Home';
import French from './French';
import Japan from './Japan';
import Spanish from './Spanish'
import German from "./German"
import Ielts from './Ielts'
import Terms from './Terms';
import Privacy from './Privacy';
const App=()=>{
    return(
        <>
        
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path='/french' component={French}/>
        <Route exact path='/japan' component={Japan}/>
        <Route exact path='/spanish' component={Spanish}/>
        <Route exact path='/german' component={German}/>
        <Route exact path='/ielts' component={Ielts}/>
        <Route exact path='/privacy' component={Privacy}/>
        <Route exact path='/terms' component={Terms}/>
        </Switch>
       
        </>
    );
};
export default App;