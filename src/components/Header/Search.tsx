import { faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';
import styles from './search.module.scss';

const Search = () => (
  <div className={styles.search}>
    <input type="search" className={styles.input} placeholder="검색" />
    <button type="button" className={styles.searchBtn}>
      <Icon icon={faSearch} />
    </button>
    <button type="button" className={styles.voiceBtn}>
      <Icon icon={faMicrophone} />
    </button>
  </div>
);

export default Search;
