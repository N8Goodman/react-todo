import React from 'react';
import { configure, shallow } from 'enzyme';
import 'jest-enzyme';
import TodoList from './index';
import TodoItem from '../TodoItem/index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('TodoList', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      todoItems: [
        "todo item",
        "todo item 2"
      ]
    };
    wrapper = shallow(<TodoList {...props} />);
  })

  it('returns a list of TodoItem', () => {
    expect(wrapper).toContainReact(<TodoItem item={'todo item'} />)
    expect(wrapper).toContainReact(<TodoItem item={'todo item 2'} />)
  });
});
