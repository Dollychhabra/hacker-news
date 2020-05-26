import jest from 'jest-mock';
import { mapDispatchToProps } from '../Hide';

describe('<Hide Container />', () => {
  it('should call dispatch and trigger "hideData"', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    props.hideData();
    expect(dispatch.mock.calls.length).toBeGreaterThan(0);
  });
});
