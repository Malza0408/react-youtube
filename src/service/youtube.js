import { map } from 'lodash';
class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular(maxResults) {
    return await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=id,snippet,statistics&chart=mostPopular&maxResults=${maxResults}&fields=items(snippet(title, thumbnails, channelTitle, publishedAt, description),statistics(viewCount, likeCount, dislikeCount), id)&key=${this.key}`,
      this.getRequestOptions,
    )
      .then(response => response.json())
      .then(result => result.items)
      .catch(error => console.log('error', error));
  }

  async searchID(maxResults, query) {
    return await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=id&maxResults=${maxResults}&q=${query}&fields=items(id(videoId))&key=AIzaSyB6Ihib72gMqqO5Qz9L5DioTEc3Frnb3Lc`,
      this.getRequestOptions,
    )
      .then(response => response.json())
      .then(result => {
        return map(result.items, 'id.videoId').join();
      });
  }

  async searchVideos(maxResults, videoList) {
    return await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=id,snippet,statistics&fields=items(snippet(title, thumbnails, channelTitle, publishedAt, description),statistics(viewCount, likeCount, dislikeCount),id)&id=${videoList}&key=${this.key}`,
      this.getRequestOptions,
    )
      .then(response => response.json())
      .then(result => result.items);
  }
}

export default Youtube;
