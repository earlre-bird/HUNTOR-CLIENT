import styles from '../../styles/pages/Main/_mainPage.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/user');
  };

  return (
    <div className={styles.main_page}>
      <div className={styles.header}>
        <Link to={'/'}>
          <img src="/image/huntor_logo.png" className={styles.logo} />
        </Link>
        <img src="/image/user_default.png" className={styles.user} onClick={handleProfileClick} />
      </div>
    </div>
  );
};

export default MainPage;
