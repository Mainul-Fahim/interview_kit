import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Banner from './Banner'

Enzyme.configure({ adapter: new Adapter() })

describe('Banner', () => {
    it('should show text', () => {
      const wrapper = shallow(<Banner/>);
      wrapper.find('button').simulate('click');
      expect(wrapper.find('button').text()).toEqual('Explore Questions');
    })
  });