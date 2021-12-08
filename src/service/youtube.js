import { map } from 'lodash';
class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular(maxResults) {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'id,snippet,statistics',
        chart: 'mostPopular',
        maxResults,
        fields:
          'items(snippet(title, thumbnails, channelTitle, publishedAt, description),statistics(viewCount, likeCount, dislikeCount), id)',
      },
    });
    console.log(response.data.items[0].statistics);
    return response?.data?.items;
  }
  // async mostPopular(maxResults) {
  //   return await fetch(
  //     `https://youtube.googleapis.com/youtube/v3/videos?part=id,snippet,statistics&chart=mostPopular&maxResults=${maxResults}&fields=items(snippet(title, thumbnails, channelTitle, publishedAt, description),statistics(viewCount, likeCount, dislikeCount), id)&key=${this.key}`,
  //     this.getRequestOptions,
  //   )
  //     .then(response => response.json())
  //     .then(result => result.items)
  //     .catch(error => console.log('error', error));
  // }
  async searchID(maxResults, query) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'id',
        maxResults,
        q: query,
        fields: 'items(id(videoId))',
      },
    });
    return map(response?.data?.items, 'id.videoId').join();
  }
  // async searchID(maxResults, query) {
  //   return await fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?part=id&maxResults=${maxResults}&q=${query}&fields=items(id(videoId))&key=${this.key}`,
  //     this.getRequestOptions,
  //   )
  //     .then(response => response.json())
  //     .then(result => {
  //       return map(result.items, 'id.videoId').join();
  //     });
  // }
  async searchVideos(videoList) {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'id,snippet,statistics',
        fields:
          'items(snippet(title, thumbnails, channelTitle, publishedAt, description),statistics(viewCount, likeCount, dislikeCount),id)',
        id: videoList,
      },
    });

    return response?.data?.items;
  }

  // async searchVideos(maxResults, videoList) {
  //   return await fetch(
  //     `https://youtube.googleapis.com/youtube/v3/videos?part=id,snippet,statistics&fields=items(snippet(title, thumbnails, channelTitle, publishedAt, description),statistics(viewCount, likeCount, dislikeCount),id)&id=${videoList}&key=${this.key}`,
  //     this.getRequestOptions,
  //   )
  //     .then(response => response.json())
  //     .then(result => result.items);
  // }
}

export default Youtube;
