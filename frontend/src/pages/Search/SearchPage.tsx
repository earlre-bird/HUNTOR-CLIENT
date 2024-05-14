import styles from '../../styles/pages/Search/_searchPage.module.scss';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';

const SearchPage = () => {
  const [searchKeyWord, setSearchKeyWord] = useState<string>('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const keyWord = urlParams.get('keyword');

    if (keyWord) setSearchKeyWord(keyWord);
  }, []);

  return (
    <div className={styles.search_page}>
      <Header keyword={searchKeyWord} />
      {searchKeyWord}
    </div>
  );
};

export default SearchPage;
