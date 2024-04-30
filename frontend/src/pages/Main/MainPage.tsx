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
        <div className={styles.header_item}>
          <Link to={'/'}>
            <img src="/image/huntor_logo.png" className={styles.logo} />
          </Link>
          <img src="/image/user_default.png" className={styles.user} onClick={handleProfileClick} />
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.subject_container}>
          <p className={styles.subject_text}>분야</p>
          <p className={styles.subject_text}>|</p>
          <div className={styles.subject}>
            <div className={styles.selected_item}>국어</div>
            <div className={styles.subject_item}>수학</div>
            <div className={styles.subject_item}>영어</div>
            <div className={styles.subject_item}>과학</div>
            <div className={styles.subject_item}>사회</div>
            <div className={styles.subject_item}>외국어</div>
            <div className={styles.subject_item}>악기</div>
          </div>
        </div>
        <div className={styles.main_item}>
          <div className={styles.card_container}>
            <p className={styles.card_text}>🔎 여러분을 기다리고 있어요!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
