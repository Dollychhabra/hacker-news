import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import expect from 'expect';
import App from './App';

describe('App', () => {
  it('should render App component correctly', () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
