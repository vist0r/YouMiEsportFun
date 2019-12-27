import React from 'react';
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
      <HomePage/>
    </div>
  );
}

export default App;
