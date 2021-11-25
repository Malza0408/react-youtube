import React, { useRef, memo } from 'react';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = memo(props => {
  const inputRef = useRef();

  const handleSubmit = event => {
    const q = inputRef.current.value;
    q && props.search(q);
    event.preventDefault();
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={props.goHome} data-testid="logo">
        <FontAwesomeIcon
          icon={['fab', 'youtube']}
          color="red"
          className={styles.font_youtube}
        />
        <span className={styles.title}>Youtube</span>
      </div>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="검색"
          ref={inputRef}
        />
        <button className={styles.inputBtn}>
          <FontAwesomeIcon
            icon={['fa', 'search']}
            color="white"
            className={styles.font_search}
          />
        </button>
      </form>
      <div className={styles.logIn}>
        <FontAwesomeIcon
          icon={['fas', 'user-circle']}
          color="white"
          className={styles.font_login}
        />
        <span>로그인</span>
      </div>
    </nav>
  );
});

export default Navbar;
