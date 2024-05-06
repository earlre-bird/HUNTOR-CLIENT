import styles from '../styles/components/_header.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState<string>('');

  const handleProfileClick = () => {
    navigate('/user');
  };

  const handleSearchClick = () => {
    searchInput == '' ? alert('검색어를 입력해주세요!') : navigate('/search');
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchClick();
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.header_item}>
        <div className={styles.left_content}>
          <Link to={'/'}>
            <img src="/image/huntor_logo.png" className={styles.logo} />
          </Link>
          <div className={styles.input_wrapper}>
            <input
              placeholder="어떤 과외를 찾고 있나요?"
              value={searchInput}
              onChange={handleSearchChange}
              onKeyDown={handleEnterKeyPress}
            />
            <button onClick={handleSearchClick} />
          </div>
        </div>
        <img src="/image/user_default.png" className={styles.user} onClick={handleProfileClick} />
      </div>
    </div>
  );
};

export default Header;
