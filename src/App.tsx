import type { Component } from 'solid-js';
import styles from './App.module.css';
import { Router, Route } from '@solidjs/router';
import routes from './routes/routes';


const App: Component = () => {
  return (
    <div class={styles.App}>
      <Router>
        {routes.map((route) => (
          <Route path={route.path} component={route.component} />
        ))}
      </Router>
    </div>
  );
};

export default App;
