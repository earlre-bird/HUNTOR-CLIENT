import styles from '../styles/components/_tutorCard.module.scss';

const TutorCard = () => {
  return (
    <div className={styles.tutoring_card}>
      <img src="/image/tutor_default.PNG" className={styles.tutor_img} />
      <div className={styles.tutor_info}>
        <div className={styles.tutor_title}>초등 국어 과외</div>
        <div className={styles.tutor_sub}>
          <div className={styles.tutor_subject}>국어</div>
          <div className={styles.tutor_subject}>온라인</div>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
