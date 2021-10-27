import React, { createRef, useEffect, useState } from 'react';
import styles from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { withRouter } from 'react-router';

axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';

const Navbar = props => {
  const [params, setParams] = useState({
    part: 'snippet, statistics',
    maxResults: 2,
    q: '싹쓰리',
    key: 'AIzaSyB6Ihib72gMqqO5Qz9L5DioTEc3Frnb3Lc',
    fields:
      'items(snippet(title, thumbnails, channelTitle, publishedAt),statistics(viewCount))',
    chart: 'mostPopular',
  });
  const inputRef = createRef();

  const handleSubmit = event => {
    event.preventDefault();
    const q = inputRef.current.value;
    q && setParams(params => (params = { ...params, q }));
    props.history.push('/watch');
  };

  // useEffect(() => {
  //   const serach = async () => {
  //     const res = await axios
  //       .get('/videos', { params })
  //       .then(response => {
  //         // console.log(JSON.stringify(response.data));
  //         localStorage.setItem('youtube', JSON.stringify(response.data));
  //       })
  //       .catch(error => console.log(error));
  //   };

  //   serach();
  // }, [params]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => props.history.push('/')}>
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
        <button className={styles.inputBtn}></button>
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
};

export default withRouter(Navbar);
