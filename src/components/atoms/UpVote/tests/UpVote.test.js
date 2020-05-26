import React from 'react';
import { shallow } from 'enzyme';
import UpVote from '../UpVote';

describe('UnVote component', () => {
  const props = {
    voteFeed: () => {},
    objectId: '6382672',
  };

  it('should render correctly and match snapshot', () => {
    const component = shallow(<UpVote {...props} />);
    expect(component).toMatchSnapshot();
  });
});
