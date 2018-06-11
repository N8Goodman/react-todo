import React from 'react';
import { configure, shallow } from 'enzyme';
import 'jest-enzyme';
import TodoItem from './index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('TodoItem', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      item: "todo item"
    };
    wrapper = shallow(<TodoItem {...props} />);
  })

  it('returns item', () => {
    const listItem = <li><input type="checkbox" />todo item</li>;
    expect(wrapper).toContainReact(listItem);
  });
});
