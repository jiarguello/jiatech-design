import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Header } from '../src/components/header/header';

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
