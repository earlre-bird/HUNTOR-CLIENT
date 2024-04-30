import styles from '../../styles/pages/Main/_mainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.main_page}>
      <div className={styles.header}>
        <img src='/image/huntor_logo.png' className={styles.logo} />
        <div className={styles.user}></div>
      </div>
    </div>
  );
};

export default MainPage;
