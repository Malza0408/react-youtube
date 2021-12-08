import { mount } from 'enzyme';
import PlayVideo from '../playVideo';
import '@fortawesome/fontawesome-free/js/all.js';
import VideoCardProvider from '../../../providers/videoCardProvider';

const dummySearch = [
  {
    id: 'kppN2AhAbSE',
    snippet: {
      channelTitle: '나나양',
      description: '무지개도 있어요~!',
      publishedAt: '2021-11-16T10:00:30Z',
      thumbnails: {
        medium: {
          height: 180,
          url: 'https://i.ytimg.com/vi/kppN2AhAbSE/mqdefault.jpg',
          width: 320,
        },
      },
      title: '[11월 둘째주 하이라이트] 어떻게 사람이름이',
    },
    statistics: {
      dislikeCount: '11',
      likeCount: '1030',
      viewCount: '40687',
    },
  },
];

const generateKey = jest.fn();
generateKey.mockReturnValue(Math.random());
const selectVideo = jest.fn();
window.scrollTo = jest.fn();

const setup = () => {
  return mount(
    <VideoCardProvider>
      <PlayVideo
        videos={dummySearch}
        video={dummySearch[0]}
        selectVideo={selectVideo}
      />
    </VideoCardProvider>,
  );
};

describe('playVideo', () => {
  it('playVideo rendering', () => {
    const view = setup();
    const list = view.find('.videoCard');
    list.simulate('click');
    expect(selectVideo).toBeCalledTimes(1);
  });
});
