import styles from '../styles/components/_searchInput.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchInput = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState<string>('');

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
    <div className={styles.input_wrapper}>
      <input
        placeholder="어떤 과외를 찾고 있나요?"
        value={searchInput}
        onChange={handleSearchChange}
        onKeyDown={handleEnterKeyPress}
      />
      <button onClick={handleSearchClick} />
    </div>
  );
};

export default SearchInput;
