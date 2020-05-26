import jest from 'jest-mock';
import { mapDispatchToProps } from '../LoadMore';

describe('<LoadMore Container />', () => {
  it('should call dispatch and trigger "fetchHomePageData"', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    props.fetchHomePageData();
    expect(dispatch.mock.calls.length).toBeGreaterThan(0);
  });
});
