import styles from '../../styles/pages/Main/_mainPage.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import TutorCard from '../../components/TutorCard';

type ItemProps = {
  subject: string;
  selected: boolean;
  onClicked: (subject: string) => void;
};

const MainPage = () => {
  const navigate = useNavigate();

  const [selectedSubject, setSelectedSubject] = useState<string>('');
  const subject: string[] = ['국어', '수학', '영어', '과학', '사회', '외국어', '예술'];

  const handleSubject = (item: string) => {
    selectedSubject === item ? setSelectedSubject('') : setSelectedSubject(item);
  };

  const handleEnrollButton = () => {
    navigate('/enrollment');
  };

  const SubjectItem: React.FC<ItemProps> = ({ subject, selected, onClicked }) => {
    return (
      <div
        onClick={() => onClicked(subject)}
        className={selected ? styles.selected_item : styles.subject_item}
      >
        {subject}
      </div>
    );
  };

  return (
    <div className={styles.main_page}>
      <Header />
      <div className={styles.main}>
        <div className={styles.top_container}>
          <div className={styles.subject_container}>
            <p className={styles.subject_text}>분야</p>
            <div className={styles.subject}>
              {subject.map((item, id) => (
                <SubjectItem
                  key={id}
                  subject={item}
                  onClicked={handleSubject}
                  selected={selectedSubject === item}
                />
              ))}
            </div>
          </div>
          {/* <button className={styles.login_btn} /> */}
          <button className={styles.enroll_btn} onClick={handleEnrollButton}>
            과외 등록
          </button>
        </div>
        <div className={styles.main_container}>
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
              <TutorCard />
              <TutorCard />
              <TutorCard />
              <TutorCard />
              <TutorCard />
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
