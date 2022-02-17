import { faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { updateQuery } from '@store/querySlice';
import { RootState } from '@store/index';
import Icon from './Icon';
import styles from './search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const query = useSelector((state: RootState) => state.query.query);

  // const onSearch = (searchQuery: string) => {};

  const onInput = (e: any) => {
    dispatch(updateQuery(e.target.value));
  };

  const onClickSearchBtn = () => {};
  const handlePressEnter = (e: any) => {
    if (e.code === 'Enter') {
      console.log('hi');
    }
  };

  return (
    <div className={styles.search}>
      <input
        type="search"
        value={query}
        className={styles.input}
        placeholder="검색"
        onInput={onInput}
        onKeyDown={handlePressEnter}
      />
      <button
        type="button"
        className={styles.searchBtn}
        onClick={onClickSearchBtn}
      >
        <Icon icon={faSearch} />
      </button>
      <button type="button" className={styles.voiceBtn}>
        <Icon icon={faMicrophone} />
      </button>
    </div>
  );
};

export default Search;
