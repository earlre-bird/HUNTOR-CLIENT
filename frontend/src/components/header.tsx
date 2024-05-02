import styles from '../styles/components/_header.module.scss'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/user');
  };

  return (
    <div className={styles.header}>
      <div className={styles.header_item}>
        <Link to={'/'}>
          <img src="/image/huntor_logo.png" className={styles.logo} />
        </Link>
        <img src="/image/user_default.png" className={styles.user} onClick={handleProfileClick} />
      </div>
    </div>
  );
};

export default Header;
