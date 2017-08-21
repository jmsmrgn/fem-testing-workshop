import React from 'react'
import {mount, render} from 'enzyme'
import Toggle from '../toggle'

test('the component renders with defaults', () => {
  const wrapper = renderToggle()
  expect(wrapper).toMatchSnapshotWithGlamor()
})

test('onToggle function is called when the button is clicked', () => {
  const onToggle = jest.fn()
  const wrapper = mountToggle({
    onToggle
  })
  const button = wrapper.find(`[data-test="button"]`)
  console.log(button.html())
  expect(wrapper).toMatchSnapshotWithGlamor('1. Before toggle')
  button.simulate('click')
  expect(wrapper).toMatchSnapshotWithGlamor('2. After toggle')
  expect(onToggle).toHaveBeenCalledTimes(1)
  expect(onToggle).toHaveBeenCalledWith(true)
})

function renderToggle(props = {}) {
  const propsToUse = Object.assign({
    onToggle() {},
    children: 'I am child'
  }, props)
  return render(<Toggle {...propsToUse} />)
}

function mountToggle(props = {}) {
  const propsToUse = Object.assign({
    onToggle() {},
    children: 'I am child'
  }, props)
  return mount(<Toggle {...propsToUse} />)
}
