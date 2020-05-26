import { VOTE } from './constants';

export const vote = data => ({
  type: VOTE,
  data,
});
