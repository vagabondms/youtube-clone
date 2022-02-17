import { faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons';

import { useDispatch, useSelector } from 'react-redux';
import { updateQuery } from '@store/querySlice';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RootState } from '@store/index';
import Icon from './Icon';
import styles from './search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const query = useSelector((state: RootState) => state.query.query);
  const [inputValue, setInputValue] = useState<string>(query);

  const onInput = (e: any) => {
    setInputValue(e.target.value);
  };

  const search = () => {
    dispatch(updateQuery(inputValue));
    navigate('/');
  };

  const onClickSearchBtn = () => {
    search();
  };
  const handlePressEnter = (e: any) => {
    if (e.code === 'Enter') {
      search();
    }
  };

  return (
    <div className={styles.search}>
      <input
        type="search"
        value={inputValue}
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
