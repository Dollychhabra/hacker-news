import { HIDE_DATA } from '../constants';

import { hideData } from '../actions';

describe('HideData Actions', () => {
  it('should return hide data type action', () => {
    const data = '435678';
    const expectedResult = {
      type: HIDE_DATA,
      data,
    };

    expect(hideData(data)).toStrictEqual(expectedResult);
  });
});
