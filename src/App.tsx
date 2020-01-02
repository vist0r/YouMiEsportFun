import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import { HomePage } from './pages/homePage';
import { mergeStyleSets } from '@uifabric/merge-styles';

const appStyles=mergeStyleSets({
  root:{
    height: "100%",
  }
})

const App = () => {
  return (
    <div className={appStyles.root}>
      <HashRouter>
        <Switch>
           <Route exact path="/" component={HomePage}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
