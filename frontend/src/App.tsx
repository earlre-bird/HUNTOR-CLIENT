import router from './router';
import { RouterProvider } from 'react-router-dom';
import styles from './_App.module.scss';

const App = () => {
  return (
    <div className={styles.App}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
