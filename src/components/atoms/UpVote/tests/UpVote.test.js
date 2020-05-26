import React from 'react';
import { shallow } from 'enzyme';
import UpVote from '../UpVote';

describe('UnVote component', () => {
  const props = {
    vote: () => {},
    objectId: '233456',
  };

  it('should render correctly and match snapshot', () => {
    const component = shallow(<UpVote {...props} />);
    expect(component).toMatchSnapshot();
  });
});
