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
      <div className={styles.main}>
        <div className={styles.main_container}>
          <div className={styles.select_container}>
            <select>
              <option>지역</option>
            </select>
            <select>
              <option>분야</option>
            </select>
            <select>
              <option>경력</option>
            </select>
          </div>

          <div className={styles.keyword_container}>
            <div className={styles.search_keyword}>서울 전체</div>
            <div className={styles.search_keyword}>온라인</div>
            <div className={styles.search_keyword}>국어</div>
            <div className={styles.search_keyword}>예술</div>
          </div>

          <div className={styles.result_container}>
            <p className={styles.result_text}>과외 검색 결과 3건</p>
            <div className={styles.list_container}>
              <div className={styles.list_item}>
                <div className={styles.left_item}>
                  <div className={styles.item_title}>
                    <p>국어</p>
                    <p>초등 국어 과외</p>
                  </div>
                  <p>온라인</p>
                </div>
                <button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
