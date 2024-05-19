import styles from '../../styles/pages/User/_userPage.module.scss';
import Header from '../../components/Header';

const UserPage = () => {
  return (
    <div className={styles.user_page}>
      <Header />
      <div className={styles.profile_container}>
        <div className={styles.left_container}>
          <img src="/image/user_default.png" className={styles.user_img} />
        </div>
        <div className={styles.right_container}>
          <div className={styles.user_name}>이름</div>
          <div className={styles.user_info}>00대학교 재학/휴학/졸업</div>
        </div>
      </div>
      <div className={styles.tutoring_container}>
        {/* <p className={styles.tutoring_text}>✏️ 과외를 시작해보세요 !</p> */}
        <p className={styles.tutoring_text}>✨ 헌터를 기다리고 있어요 !</p>
        <div className={styles.tutoring_list}>

          <div className={styles.tutor_card}>
            <div className={styles.tutor_info}>
              <div className={styles.tutor_title}>초등 국어 과외</div>
              <div className={styles.tutor_sub}>
                <div className={styles.tutor_subject}>국어</div>
                <div className={styles.tutor_subject}>온라인</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserPage;
