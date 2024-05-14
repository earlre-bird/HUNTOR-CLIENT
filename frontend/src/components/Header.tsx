import styles from '../styles/components/_header.module.scss';
import { Link } from 'react-router-dom';
import SearchInput from './SearchInput';
import Dropdown from './Dropdown';

type HeaderProps = {
  keyword?: string;
};

const Header: React.FC<HeaderProps> = ({ keyword }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header_item}>
        <div className={styles.left_content}>
          <Link to={'/'}>
            <img src="/image/huntor_logo.png" className={styles.logo} />
          </Link>
          <SearchInput inputValue={keyword} />
        </div>
        <Dropdown />
      </div>
    </div>
  );
};

export default Header;
