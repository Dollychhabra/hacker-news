import { VOTE } from '../constants';

import { vote } from '../actions';

describe('VoteFeed Actions', () => {
  const data = {
    objectId: '454567',
    voted: true,
  };

  it('should return vote type action', () => {
    const expectedResult = {
      type: VOTE,
      data,
    };

    expect(vote(data)).toStrictEqual(expectedResult);
  });
});
