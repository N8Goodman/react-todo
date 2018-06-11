import React from 'react';
import { configure, shallow } from 'enzyme';
import 'jest-enzyme';
import TodoInput from './index';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('TodoInput', () => {
  let wrapper, props, buttonElement, inputElement;

  beforeEach(() => {
    props = {
      item: "todo item",
      addItem: jest.fn(),
      updateInput: jest.fn(),
    };
    wrapper = shallow(<TodoInput {...props} />);
    inputElement = wrapper.find('input');
    buttonElement = wrapper.find('button');
  })

  it('has input value', () => {
    expect(inputElement).toHaveValue('todo item');
  });

  it('invokes addItem when button is clicked', () => {
    buttonElement.simulate('click')
    expect(props.addItem).toHaveBeenCalled();
  });

  it('invokes updateInput whenever input value is changed', () => {
    inputElement.simulate('change')
    expect(props.updateInput).toHaveBeenCalled();
  });
});
