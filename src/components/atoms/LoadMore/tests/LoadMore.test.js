import React from 'react';
import { shallow } from 'enzyme';
import LoadMore from '../LoadMore';

describe('LoadMore component', () => {
  const props = {
    currentPage: 1,
    fetchFeedListData: () => {},
    totalPages: 3,
  };

  it('should render correctly and match snapshot', () => {
    const component = shallow(<LoadMore {...props} />);
    expect(component).toMatchSnapshot();
  });
});
