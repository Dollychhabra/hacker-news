import React from 'react';
import { shallow } from 'enzyme';
import Hide from '../Hide';

describe('Hide component', () => {
  const props = {
    hideData: () => {},
    objectId: '453534',
  };

  it('should render correctly and match snapshot', () => {
    const component = shallow(<Hide {...props} />);
    expect(component).toMatchSnapshot();
  });
});
