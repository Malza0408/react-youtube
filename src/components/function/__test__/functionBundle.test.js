import { handleCount, handleViewCountForm } from '../functionBundle';

test('viewcount가 123531 회면 12만 회가 나와야 한다.', () => {
  expect(handleCount(123500)).toBe(`12만`);
});

test('viewcount가 1억35097 회면 1억 회가 나와야 한다.', () => {
  expect(handleCount(100035000)).toBe(`1억`);
});

test('73994000 뷰라면, 73,994,000 이 나와야 한다', () => {
  expect(handleViewCountForm(73994000)).toBe(`73,994,000`);
});
