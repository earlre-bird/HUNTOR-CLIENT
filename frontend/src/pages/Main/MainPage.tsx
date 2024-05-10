import styles from '../../styles/pages/Main/_mainPage.module.scss';
import Header from '../../components/Header';
import TutorCard from '../../components/TutorCard';

const MainPage = () => {
  return (
    <div className={styles.main_page}>
      <Header />
      <div className={styles.main}>
        <div className={styles.subject_container}>
          <p className={styles.subject_text}>분야</p>
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
          <div className={styles.tutor_container}>
            <p className={styles.card_text}>🔎 여러분을 기다리고 있어요!</p>
            <div className={styles.card_container}>
              <TutorCard />
              <TutorCard />
              <TutorCard />
              <TutorCard />
              <TutorCard />
              <TutorCard />
              <TutorCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
