import React from 'react';
import { shallow } from 'enzyme';
import Image from '../Image';

describe('Image Component', () => {
  const props = {
    alt: 'aa',
    src: '/',
    isDynamic: true,
  };

  test('should render correctly and match snapshot', () => {
    const component = shallow(<Image {...props} />);
    expect(component).toMatchSnapshot();
  });

});
