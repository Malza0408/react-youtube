export const generateKey = publishedAt => {
  return `${publishedAt}_${new Date().getTime() + Math.random()}`;
};

export const handleCount = viewCount => {
  if (viewCount < 1000) {
    return `${viewCount}`;
  } else if (viewCount < 10000) {
    viewCount /= 1000;
    viewCount = Math.floor(viewCount);
    return `${viewCount}천`;
  }
  viewCount /= 10000;
  viewCount = Math.floor(viewCount);

  if (viewCount > 10000) {
    viewCount /= 10000;
    viewCount = Math.floor(viewCount);
    return `${viewCount}억`;
  }
  return `${viewCount}만`;
};

export const handleDate = date => {
  const publishedDate = new Date(date);
  return `${publishedDate.getFullYear()}년 ${publishedDate.getMonth()}월 ${publishedDate.getDate()}일`;
};

export const handleViewCountForm = count => {
  const number = Number(count);
  return number.toLocaleString('ko-kr');
};
