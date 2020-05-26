import jest from 'jest-mock';
import { mapDispatchToProps } from '../UpVote';

describe('<UpVote Container />', () => {
  it('should call dispatch and trigger "vote"', () => {
    const dispatch = jest.fn();

    const props = mapDispatchToProps(dispatch);

    props.vote();

    expect(dispatch.mock.calls.length).toBeGreaterThan(0);
  });
});
