import type { Component } from 'solid-js';
import styles from './App.module.css';
import Inicio from './routes/inicio/Inicio';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Inicio/>
    </div>
  );
};

export default App;
