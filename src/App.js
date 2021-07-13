import React, {Fragment} from 'react';
import Intro from './components/IntroPopup';
import Home from './components/pages/Home';
import {GlobalStyle} from './components/IntroPopup/introStyle.js';

const App = () => {
  return (
		<Fragment>
			<GlobalStyle/>
			<Intro/>
			<Home/>
		</Fragment>
		);
}

export default App;
