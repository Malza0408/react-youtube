import { mount } from 'enzyme';
import PlayVideo from '../playVideo';
import '@fortawesome/fontawesome-free/js/all.js';

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
const handleCount = jest.fn();
const selectVideo = jest.fn();
const handleDate = jest.fn();
const handleViewCountForm = jest.fn();
const videoCardSetting = 'searchResult';
const thumbSize = 'medium';
const fontSize = 'small';

const setup = () => {
  return mount(
    <PlayVideo
      videos={dummySearch}
      video={dummySearch[0]}
      generateKey={generateKey}
      selectVideo={selectVideo}
      handleCount={handleCount}
      handleViewCountForm={handleViewCountForm}
      handleDate={handleDate}
      videoCardSetting={videoCardSetting}
      thumbSize={thumbSize}
      fontSize={fontSize}
    />,
  );
};

describe('playVideo', () => {
  it('playVideo rendering', () => {
    const view = setup();
    console.log(view.debug());
    const list = view.find('.videoCard');
    list.simulate('click');
    expect(selectVideo).toBeCalledTimes(1);
  });
});
