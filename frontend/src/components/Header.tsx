import styles from '../styles/components/_header.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/user');
  };

  return (
    <div className={styles.header}>
      <div className={styles.header_item}>
        <div className={styles.left_content}>
          <Link to={'/'}>
            <img src="/image/huntor_logo.png" className={styles.logo} />
          </Link>
          <div className={styles.input_wrapper}>
            <input placeholder="어떤 과외를 찾고 있나요?" />
            <button />
          </div>
        </div>
        <img src="/image/user_default.png" className={styles.user} onClick={handleProfileClick} />
      </div>
    </div>
  );
};

export default Header;
