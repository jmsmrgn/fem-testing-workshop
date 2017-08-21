import React from 'react'
import {render} from 'enzyme'
import Toggle from '../toggle'

test('the component renders with defaults', () => {
  const wrapper = render(<Toggle onToggle={() => {}}>I am child</Toggle>)
  expect(wrapper).toMatchSnapshotWithGlamor()
})
