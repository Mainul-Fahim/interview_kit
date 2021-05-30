import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import InterviewDetail from './InterviewDetail'

Enzyme.configure({ adapter: new Adapter() })

describe('InterviewDetail', () => {
    it('should show text', () => {
      const wrapper = shallow(<InterviewDetail/>);
      const text = wrapper.find('div div div');
      expect(text.text()).toBe('This is my first test');
    })
  });