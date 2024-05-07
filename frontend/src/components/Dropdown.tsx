import styles from '../styles/components/_dropDown.module.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dropdown = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<boolean>(true);

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setView(!view);
  };

  const handleProfileClick = () => {
    navigate('/user');
  };

  const handleOutsideClick = () => {
    setView(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.dropdown}>
      <img
        src="/image/user_default.png"
        className={styles.profile_img}
        onClick={handleDropdownClick}
      />
      {view && (
        <ul>
          <li onClick={handleProfileClick}>내 프로필</li>
          <li>설정</li>
          <li>로그아웃</li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
